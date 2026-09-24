import { useEffect, useRef, useState } from 'react'

export function useMobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false)
                buttonRef.current?.focus()
            }
        }

        function handleResize() {
            if (window.innerWidth >= 924) {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('resize', handleResize)
        }
    }, [isOpen])

    return {
        buttonRef,
        closeMenu: () => setIsOpen(false),
        isOpen,
        toggleMenu: () => setIsOpen((currentState) => !currentState),
    }
}

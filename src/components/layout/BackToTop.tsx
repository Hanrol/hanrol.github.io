import { useEffect, useState } from 'react'

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        function updateVisibility() {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener('scroll', updateVisibility, { passive: true })
        updateVisibility()

        return () => window.removeEventListener('scroll', updateVisibility)
    }, [])

    return (
        <button
            className={`${isVisible ? 'flex' : 'hidden'} fixed right-6 bottom-6 h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-2xl font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600`}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <span aria-hidden="true">↑</span>
            <span className="sr-only">Volver arriba</span>
        </button>
    )
}

export default BackToTop

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
    const sectionKey = sectionIds.join(',')

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, {
            rootMargin: '-25% 0px -65% 0px',
            threshold: 0,
        })

        sectionIds.forEach((sectionId) => {
            const section = document.getElementById(sectionId)

            if (section) {
                observer.observe(section)
            }
        })

        return () => observer.disconnect()
    }, [sectionKey, sectionIds])

    return activeSection
}

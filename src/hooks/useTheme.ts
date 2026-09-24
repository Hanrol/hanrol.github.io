import { useEffect, useState } from 'react'

function getInitialTheme() {
    try {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme === 'dark'
        }
    } catch {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
    const [isDark, setIsDark] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'

        const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
        themeColor?.setAttribute('content', isDark ? '#020617' : '#f1f5f9')
    }, [isDark])

    function toggleTheme() {
        setIsDark((currentTheme) => {
            const nextTheme = !currentTheme

            try {
                localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
            } catch {
                return nextTheme
            }

            return nextTheme
        })
    }

    return { isDark, toggleTheme }
}

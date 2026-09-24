import { useActiveSection } from '../../hooks/useActiveSection.ts'
import { useMobileMenu } from '../../hooks/useMobileMenu.ts'

type HeaderProps = {
    isDark: boolean
    toggleTheme: () => void
}

const navigationItems = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'educacion', label: 'Educación' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'contacto', label: 'Contacto' },
]

const sectionIds = navigationItems.map((item) => item.id)

function Header({ isDark, toggleTheme }: HeaderProps) {
    const { buttonRef, closeMenu, isOpen, toggleMenu } = useMobileMenu()
    const activeSection = useActiveSection(sectionIds)

    function scrollToSection(sectionId: string) {
        closeMenu()
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="sticky top-0 z-50">
            <nav className="flex flex-wrap items-center gap-2 bg-slate-950 px-4 py-3 shadow-md" aria-label="Navegación principal">
                <h1 className="px-3 text-lg font-semibold">
                    <a className="text-violet-300" href="/#/?section=perfil" onClick={(event) => {
                        event.preventDefault()
                        scrollToSection('perfil')
                    }}>Benjamín Cubillos</a>
                </h1>
                <button
                    ref={buttonRef}
                    className="ml-auto inline-flex items-center justify-center rounded-md px-3 py-2 text-slate-200 transition-colors hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 min-[924px]:hidden"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="nav-menu"
                    onClick={toggleMenu}
                >
                    <span className="text-2xl leading-none" aria-hidden="true">{isOpen ? '×' : '☰'}</span>
                    <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
                </button>
                <div id="nav-menu" className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col items-stretch gap-2 pt-2 min-[924px]:ml-auto min-[924px]:flex min-[924px]:w-auto min-[924px]:flex-row min-[924px]:items-center min-[924px]:justify-end min-[924px]:pt-0`}>
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id

                        return (
                            <a
                                className={`${isActive ? 'bg-violet-600 text-white' : 'text-slate-200'} rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300`}
                                href={`/#/?section=${item.id}`}
                                aria-current={isActive ? 'location' : undefined}
                                key={item.id}
                                onClick={(event) => {
                                    event.preventDefault()
                                    scrollToSection(item.id)
                                }}
                            >
                                {item.label}
                            </a>
                        )
                    })}
                    <button
                        className="flex items-center justify-center gap-2 rounded-md border border-violet-400/40 px-3 py-2 text-sm font-medium text-violet-200 transition-colors hover:border-violet-300 hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                        type="button"
                        aria-pressed={isDark}
                        onClick={toggleTheme}
                    >
                        <span className="text-lg leading-none" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
                        <span>{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header

import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'
import BackToTop from './components/navigation/BackToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import CvPage from './pages/CvPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { useTheme } from './hooks/useTheme.ts'

type PortfolioPageProps = {
    isDark: boolean
    toggleTheme: () => void
}

function PortfolioPage({ isDark, toggleTheme }: PortfolioPageProps) {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <HomePage />
            <BackToTop />
            <Footer />
        </div>
    )
}

function App() {
    const { isDark, toggleTheme } = useTheme()

    return (
        <Routes>
            <Route path="/" element={<PortfolioPage isDark={isDark} toggleTheme={toggleTheme} />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default App

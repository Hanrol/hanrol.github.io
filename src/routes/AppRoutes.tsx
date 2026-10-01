import { Route, Routes } from 'react-router-dom'
import BackToTop from '../components/layout/BackToTop.tsx'
import Footer from '../components/layout/Footer.tsx'
import Header from '../components/layout/Header.tsx'
import ContactPage from '../pages/ContactPage.tsx'
import CvPage from '../pages/CvPage.tsx'
import HomePage from '../pages/HomePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'

type AppRoutesProps = {
    isDark: boolean
    toggleTheme: () => void
}

function PortfolioPage({ isDark, toggleTheme }: AppRoutesProps) {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <HomePage />
            <BackToTop />
            <Footer />
        </div>
    )
}

function AppRoutes({ isDark, toggleTheme }: AppRoutesProps) {
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

export default AppRoutes

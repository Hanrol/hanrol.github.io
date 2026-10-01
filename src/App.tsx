import { useTheme } from './hooks/useTheme.ts'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
    const { isDark, toggleTheme } = useTheme()

    return <AppRoutes isDark={isDark} toggleTheme={toggleTheme} />
}

export default App

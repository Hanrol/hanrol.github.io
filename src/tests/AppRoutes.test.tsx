import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import AppRoutes from '../routes/AppRoutes.tsx'

function renderRoute(path = '/') {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <AppRoutes isDark={false} toggleTheme={vi.fn()} />
        </MemoryRouter>,
    )
}

describe('Rutas del portafolio', () => {
    it('permite abrir el CV desde la portada', async () => {
        const user = userEvent.setup()
        renderRoute()
        await user.click(screen.getByRole('link', { name: 'Ver CV' }))
        expect(screen.getByRole('button', { name: 'Guardar como PDF' })).toBeInTheDocument()
    })

    it('permite abrir el formulario desde la portada', async () => {
        const user = userEvent.setup()
        renderRoute()
        await user.click(screen.getByRole('link', { name: 'Abrir formulario de contacto' }))
        expect(screen.getByRole('heading', { name: 'Formulario de contacto' })).toBeInTheDocument()
    })

    it('muestra el error para una ruta desconocida y permite regresar', async () => {
        const user = userEvent.setup()
        renderRoute('/no-existe')
        expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
        await user.click(screen.getByRole('link', { name: 'Volver al portafolio' }))
        expect(screen.getByRole('heading', { name: 'Perfil profesional' })).toBeInTheDocument()
    })
})

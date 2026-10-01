import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ContactPage from '../pages/ContactPage.tsx'

function renderContact() {
    render(<MemoryRouter><ContactPage /></MemoryRouter>)
}

describe('Formulario de contacto', () => {
    it('no inicia el envío con campos vacíos', async () => {
        const user = userEvent.setup()
        renderContact()
        await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
        expect(screen.getByRole('button', { name: 'Enviar mensaje' })).toBeEnabled()
        expect(screen.getByLabelText('Nombre')).toBeInvalid()
        expect(screen.getByRole('status')).toHaveClass('hidden')
    })

    it('rechaza un correo inválido', async () => {
        const user = userEvent.setup()
        renderContact()
        await user.type(screen.getByLabelText('Nombre'), 'Benjamín')
        await user.type(screen.getByLabelText('Correo'), 'correo-invalido')
        await user.type(screen.getByLabelText('Asunto'), 'Consulta')
        await user.type(screen.getByLabelText('Mensaje'), 'Este es un mensaje de prueba.')
        await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
        expect(screen.getByLabelText('Correo')).toBeInvalid()
        expect(screen.getByRole('button', { name: 'Enviar mensaje' })).toBeEnabled()
    })

    it('simula el envío, limpia los campos y enfoca la confirmación', async () => {
        const user = userEvent.setup()
        renderContact()
        await user.type(screen.getByLabelText('Nombre'), 'Benjamín')
        await user.type(screen.getByLabelText('Correo'), 'prueba@example.com')
        await user.type(screen.getByLabelText('Asunto'), 'Consulta')
        await user.type(screen.getByLabelText('Mensaje'), 'Este es un mensaje de prueba.')
        await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))
        expect(screen.getByRole('button', { name: 'Enviando...' })).toBeDisabled()
        await waitFor(() => expect(screen.getByRole('button', { name: 'Enviar mensaje' })).toBeEnabled(), { timeout: 2500 })
        expect(screen.getByRole('status')).toHaveClass('block')
        expect(screen.getByLabelText('Nombre')).toHaveValue('')
        expect(screen.getByLabelText('Correo')).toHaveValue('')
        expect(screen.getByLabelText('Asunto')).toHaveValue('')
        expect(screen.getByLabelText('Mensaje')).toHaveValue('')
        await waitFor(() => expect(screen.getByRole('status')).toHaveFocus())
    })
})

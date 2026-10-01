import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

function ContactPage() {
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const statusRef = useRef<HTMLParagraphElement>(null)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        if (isSent) {
            statusRef.current?.focus()
        }
    }, [isSent])

    useEffect(() => {
        const previousTitle = document.title
        document.title = 'Contacto | Benjamín Cubillos'

        return () => {
            document.title = previousTitle

            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.currentTarget

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        setIsSending(true)
        setIsSent(false)

        timeoutRef.current = window.setTimeout(() => {
            form.reset()
            setIsSending(false)
            setIsSent(true)
            timeoutRef.current = null
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
            <main className="mx-auto max-w-2xl">
                <Link className="font-semibold text-violet-700 transition-colors hover:text-blue-700 hover:underline" to="/#contacto">← Volver al portafolio</Link>

                <section className="mt-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                    <h1 className="text-2xl font-bold text-slate-900">Formulario de contacto</h1>
                    <p className="mt-2 text-slate-700">Completa los campos para enviar un mensaje.</p>

                    <form className="mt-6 space-y-5" noValidate aria-busy={isSending} onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-900" htmlFor="name">Nombre</label>
                            <input id="name" className="mt-2 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700" name="name" type="text" autoComplete="name" required minLength={2} />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-900" htmlFor="email">Correo</label>
                            <input id="email" className="mt-2 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700" name="email" type="email" autoComplete="email" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-900" htmlFor="subject">Asunto</label>
                            <input id="subject" className="mt-2 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700" name="subject" type="text" required minLength={3} />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-900" htmlFor="message">Mensaje</label>
                            <textarea id="message" className="mt-2 min-h-36 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700" name="message" required minLength={10}></textarea>
                        </div>

                        <button className="rounded-md bg-violet-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSending}>{isSending ? 'Enviando...' : 'Enviar mensaje'}</button>

                        <p ref={statusRef} className={`${isSent ? 'block' : 'hidden'} rounded-md bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200`} role="status" aria-live="polite" tabIndex={-1}>Mensaje enviado correctamente.</p>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default ContactPage

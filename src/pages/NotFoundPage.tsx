import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    useEffect(() => {
        const previousTitle = document.title
        document.title = 'Página no encontrada | Benjamín Cubillos'

        return () => {
            document.title = previousTitle
        }
    }, [])

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 text-slate-900">
            <main className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">Error 404</p>
                <h1 className="mt-3 text-3xl font-bold text-slate-900">Página no encontrada</h1>
                <p className="mt-4 leading-7 text-slate-700">La dirección ingresada no existe o fue movida.</p>
                <Link className="mt-7 inline-flex rounded-md bg-violet-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600" to="/">Volver al portafolio</Link>
            </main>
        </div>
    )
}

export default NotFoundPage

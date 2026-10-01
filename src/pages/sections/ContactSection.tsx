import { Link } from 'react-router-dom'

function ContactSection() {
    return (
        <section id="contacto" className="rounded-xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Contacto</h2>
            <p className="mt-2 text-sm text-slate-700">Déjame tus datos y un mensaje mediante el formulario de contacto.</p>
            <Link className="mt-4 inline-flex items-center rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600" to="/contacto">Abrir formulario de contacto</Link>
        </section>
    )
}

export default ContactSection

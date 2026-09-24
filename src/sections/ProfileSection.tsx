import gato from '../assets/images/gato.gif'
import { Link } from 'react-router-dom'

function ProfileSection() {
    return (
        <section id="perfil" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <img className="h-40 w-40 shrink-0 rounded-full object-cover ring-4 ring-violet-200" src={gato} alt="Imagen de perfil de Benjamín Cubillos" />
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-slate-900">Perfil profesional</h2>
                    <p className="mt-1 font-medium text-violet-700">Estudiante de Ingeniería en Informática</p>
                    <p className="mt-4 max-w-2xl leading-7 text-slate-700">
                        Soy estudiante de informática interesado en el desarrollo de
                        software y en aprender nuevas tecnologías. Me caracterizo por
                        ser responsable, organizado y trabajar bien en equipo.
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                        <Link className="inline-flex items-center rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600" to="/cv">Ver CV</Link>
                        <a className="inline-flex items-center rounded-md border border-violet-600 px-4 py-2 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600" href="/documents/CV-Benjamin-Cubillos.pdf" download>Descargar PDF</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection

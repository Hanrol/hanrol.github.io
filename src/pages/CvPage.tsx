import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function CvPage() {
    useEffect(() => {
        const previousTitle = document.title
        document.title = 'Currículum | Benjamín Cubillos'

        return () => {
            document.title = previousTitle
        }
    }, [])

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 print:bg-white print:p-0">
            <div className="mx-auto mb-4 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
                <Link className="font-semibold text-violet-700 hover:underline" to="/">← Volver al portafolio</Link>
                <div className="flex flex-wrap gap-3">
                    <a className="rounded-md border border-violet-700 px-4 py-2 font-semibold text-violet-700 hover:bg-violet-100" href="/documents/CV-Benjamin-Cubillos.pdf" download>Descargar PDF</a>
                    <button className="rounded-md bg-violet-700 px-4 py-2 font-semibold text-white hover:bg-blue-700" type="button" onClick={() => window.print()}>Guardar como PDF</button>
                </div>
            </div>

            <main className="cv-page mx-auto max-w-[210mm] bg-white px-10 py-9 shadow-lg print:max-w-none print:p-0 print:shadow-none">
                <header>
                    <h1 className="text-3xl font-bold">Benjamín Cubillos</h1>
                    <p className="mt-1 text-lg font-semibold">Estudiante de Ingeniería en Informática</p>
                    <address className="mt-3 not-italic text-sm leading-6">
                        <p>Teléfono: +56 9 3518 6822</p>
                        <p>Correo: benjaminc.pers@gmail.com</p>
                        <p>GitHub: https://github.com/Hanrol</p>
                    </address>
                </header>

                <section className="mt-4">
                    <h2 className="border-b border-slate-400 pb-1 text-lg font-bold">Perfil profesional</h2>
                    <p className="mt-2 text-sm leading-5">Estudiante de informática interesado en el desarrollo de software y el aprendizaje de nuevas tecnologías. Responsable, organizado y con capacidad para trabajar en equipo.</p>
                </section>

                <section className="mt-4">
                    <h2 className="border-b border-slate-400 pb-1 text-lg font-bold">Experiencia laboral</h2>
                    <article className="mt-2">
                        <h3 className="font-bold">Ayudante del área de informática</h3>
                        <p className="text-sm font-semibold">Duoc UC | Julio 2025 - Diciembre 2025</p>
                        <p className="mt-1 text-sm leading-5">Apoyo en eventos y charlas del área informática, preparación de espacios, orientación a asistentes y colaboración con docentes y ayudantes.</p>
                    </article>
                    <article className="mt-3">
                        <h3 className="font-bold">Operario de bodega, área administrativa</h3>
                        <p className="text-sm font-semibold">Blue Express | Diciembre 2024 - Febrero 2025 | Part-time</p>
                        <p className="mt-1 text-sm leading-5">Control de vuelos y cargas recibidas desde aduanas, además del registro y actualización de información en tablas de Excel.</p>
                    </article>
                </section>

                <section className="mt-4">
                    <h2 className="border-b border-slate-400 pb-1 text-lg font-bold">Educación</h2>
                    <article className="mt-2">
                        <h3 className="font-bold">Ingeniería en Informática</h3>
                        <p className="text-sm">Duoc UC | 2025 - Actualidad</p>
                    </article>
                    <article className="mt-2">
                        <h3 className="font-bold">Ingeniería Civil en Informática</h3>
                        <p className="text-sm">Universidad Técnica Federico Santa María | 2023 - 2024</p>
                    </article>
                </section>

                <section className="mt-4">
                    <h2 className="border-b border-slate-400 pb-1 text-lg font-bold">Habilidades</h2>
                    <p className="mt-2 text-sm leading-5"><strong>Técnicas:</strong> HTML, CSS, JavaScript, Python, Java, C/C++ y Excel.</p>
                    <p className="text-sm leading-5"><strong>Idiomas:</strong> Inglés intermedio.</p>
                    <p className="text-sm leading-5"><strong>Competencias:</strong> Trabajo en equipo, organización y resolución de problemas.</p>
                </section>

                <section className="mt-4">
                    <h2 className="border-b border-slate-400 pb-1 text-lg font-bold">Proyectos</h2>
                    <article className="mt-2">
                        <h3 className="font-bold">MediReservas</h3>
                        <p className="text-sm leading-5">Sistema de reservas médicas desarrollado con arquitectura de microservicios y Spring Boot.</p>
                        <p className="text-sm">Repositorio: https://github.com/GabFloresLuna/MediReservas</p>
                    </article>
                    <article className="mt-2">
                        <h3 className="font-bold">Examen FullStack I</h3>
                        <p className="text-sm leading-5">Proyecto desarrollado como resolución del Examen Transversal de FullStack I.</p>
                        <p className="text-sm">Repositorio: https://github.com/Hanrol/ExamenTransversal-FullStack1</p>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default CvPage

import { projects } from '../data/projects.ts'

function PortfolioSection() {
    return (
        <section id="portafolio" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Portafolio</h2>
            <p className="mt-2 text-slate-600">Estos son algunos de los proyectos que he desarrollado.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <article className="overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200" key={project.title}>
                        <a className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                            <img className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105" src={project.image} alt={project.imageAlt} loading="lazy" />
                        </a>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                            <p className="mt-2 leading-7 text-slate-700">{project.description}</p>
                            <a className="mt-4 inline-block font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4 transition-colors hover:text-blue-700" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default PortfolioSection

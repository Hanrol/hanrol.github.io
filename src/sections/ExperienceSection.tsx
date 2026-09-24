import { experience } from '../data/experience.ts'

function ExperienceSection() {
    return (
        <section id="experiencia" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Experiencia</h2>
            <ul className="ml-2 mt-6 border-l-2 border-violet-200">
                {experience.map((item, index) => (
                    <li className={`relative pl-8 ${index < experience.length - 1 ? 'pb-8' : ''}`} key={`${item.period}-${item.company}`}>
                        <span className="absolute -left-[0.5625rem] top-6 h-4 w-4 rounded-full border-4 border-white bg-violet-500" aria-hidden="true"></span>
                        <article className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                            <p className="text-sm font-semibold text-slate-500">{item.period}</p>
                            <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.role}</h3>
                            <p className="mt-1 font-medium text-slate-600">{item.company}</p>
                            <p className="mt-4 leading-7 text-slate-700">{item.description}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ExperienceSection

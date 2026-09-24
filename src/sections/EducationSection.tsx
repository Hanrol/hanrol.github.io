import { education } from '../data/education.ts'

function EducationSection() {
    return (
        <section id="educacion" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Educación</h2>
            <ul className="ml-2 mt-6 border-l-2 border-violet-200">
                {education.map((item, index) => (
                    <li className={`relative pl-8 ${index < education.length - 1 ? 'pb-8' : ''}`} key={`${item.period}-${item.institution}`}>
                        <span className="absolute -left-[0.5625rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-violet-500" aria-hidden="true"></span>
                        <p className="text-sm font-semibold text-slate-500">{item.period}</p>
                        <strong className="mt-1 block text-lg text-slate-900">{item.institution}</strong>
                        <p className="mt-1 text-slate-700">{item.program}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default EducationSection

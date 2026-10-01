import { skillGroups } from '../../data/portfolioData.ts'

function SkillsSection() {
    return (
        <section id="habilidades" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Habilidades</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
                {skillGroups.map((group) => (
                    <div key={group.category}>
                        <h3 className="font-semibold text-slate-900">{group.category}</h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700" key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection

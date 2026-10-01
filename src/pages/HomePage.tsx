import ContactSection from './sections/ContactSection.tsx'
import EducationSection from './sections/EducationSection.tsx'
import ExperienceSection from './sections/ExperienceSection.tsx'
import PortfolioSection from './sections/PortfolioSection.tsx'
import ProfileSection from './sections/ProfileSection.tsx'
import SkillsSection from './sections/SkillsSection.tsx'

function HomePage() {
    return (
        <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
            <ProfileSection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    )
}

export default HomePage

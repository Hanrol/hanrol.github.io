import ContactSection from './ContactSection.tsx'
import EducationSection from './EducationSection.tsx'
import ExperienceSection from './ExperienceSection.tsx'
import PortfolioSection from './PortfolioSection.tsx'
import ProfileSection from './ProfileSection.tsx'
import SkillsSection from './SkillsSection.tsx'

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

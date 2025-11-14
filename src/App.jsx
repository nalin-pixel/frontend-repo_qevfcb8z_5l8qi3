import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { SkillGrid, ProjectGrid, InternshipList, FunStrip } from './components/Cards'
import Footer from './components/Footer'
import CursorFX from './components/CursorFX'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <CursorFX />
      <Navbar />
      <Hero />

      <Section id="skills" title="Core Skills" subtitle="A focused stack for fast, beautiful product work." tint="purple">
        <SkillGrid />
      </Section>

      <Section id="projects" title="Selected Projects" subtitle="A few visual-heavy, low-copy experiments and client pieces." tint="indigo">
        <ProjectGrid />
      </Section>

      <Section id="internships" title="Internships" subtitle="Hands-on stints where craft and code met." tint="fuchsia">
        <InternshipList />
      </Section>

      <Section id="fun" title="Playground" subtitle="Tiny, delightful interactions and experiments." tint="purple">
        <div className="space-y-6">
          <FunStrip />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-900/40 to-indigo-900/30" />
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-purple-900/30" />
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/30" />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App

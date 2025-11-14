import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'

function useHoverGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const posX = e.clientX - rect.left
    const posY = e.clientY - rect.top
    x.set(posX)
    y.set(posY)
  }

  const background = useMotionTemplate`radial-gradient(200px 200px at ${x}px ${y}px, rgba(139,92,246,0.18), transparent 60%)`

  return { ref, onMouseMove, background }
}

export function SkillGrid() {
  const skills = [
    { title: 'UI/UX', tags: ['Wireframes', 'Design Systems', 'Accessibility'] },
    { title: 'Frontend', tags: ['React', 'Tailwind', 'Framer Motion'] },
    { title: 'Graphics', tags: ['Branding', 'Posters', '3D'] },
    { title: 'Tools', tags: ['Figma', 'Spline', 'Adobe Suite'] }
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((s, i) => (
        <HoverCard key={i} title={s.title} tags={s.tags} />
      ))}
    </div>
  )
}

export function ProjectGrid() {
  const projects = [
    { title: 'NeoBank Dashboard', sub: 'Fintech UI • React + Tailwind', img: 'https://images.unsplash.com/photo-1551281044-8b95a05f4d79?q=80&w=1200&auto=format&fit=crop', hue: 'from-indigo-500/30' },
    { title: 'Creative Studio Site', sub: 'Portfolio • Motion-first', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop', hue: 'from-fuchsia-500/30' },
    { title: 'Ecom Concepts', sub: 'Shop • Card micro-interactions', img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop', hue: 'from-purple-500/30' }
  ]
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  )
}

export function InternshipList() {
  const items = [
    { role: 'UI Design Intern', org: 'BetaWorks', year: '2024', points: ['Design system clean-up', 'Dark mode patterns', 'Prototype handoff'] },
    { role: 'Frontend Intern', org: 'Aster Labs', year: '2023', points: ['Landing pages', 'Animations', 'Perf budgets'] }
  ]
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold">{it.role} • <span className="text-zinc-300">{it.org}</span></h4>
            <span className="text-zinc-400 text-sm">{it.year}</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-zinc-400 space-y-1">
            {it.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

export function FunStrip() {
  const items = ['Clicky cursor', 'Palette switch', '3D hover', 'Wiggle emoji', 'Noise layer']
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      className="whitespace-nowrap overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-indigo-950 to-fuchsia-950/50 p-4 text-zinc-300"
    >
      {items.concat(items).map((t, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-fuchsia-400 inline-block" />
          {t}
        </span>
      ))}
    </motion.div>
  )
}

function HoverCard({ title, tags }) {
  const { ref, onMouseMove, background } = useHoverGlow()

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-xl overflow-hidden"
    >
      <motion.div style={{ background }} className="pointer-events-none absolute inset-0" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
        {tags.map((t, i) => (
          <span key={i} className="rounded-full bg-white/10 px-2.5 py-1">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectCard({ title, sub, img, hue }) {
  const { ref, onMouseMove, background } = useHoverGlow()
  return (
    <motion.a
      href="#"
      ref={ref}
      onMouseMove={onMouseMove}
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <motion.div style={{ background }} className="pointer-events-none absolute inset-0" />
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={img} alt="project" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${hue} to-transparent`} />
      </div>
      <div className="p-5">
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-zinc-400 text-sm mt-1">{sub}</p>
      </div>
    </motion.a>
  )
}

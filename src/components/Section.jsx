import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, tint = 'indigo' }) {
  const tintMap = {
    indigo: 'from-indigo-500/10 via-transparent',
    fuchsia: 'from-fuchsia-500/10 via-transparent',
    purple: 'from-purple-500/10 via-transparent'
  }
  return (
    <section id={id} className="relative py-24 md:py-32 bg-[#0b0b11]">
      <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_20%,rgba(255,255,255,0.06),transparent_60%)]`} />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${tintMap[tint]} to-transparent`} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

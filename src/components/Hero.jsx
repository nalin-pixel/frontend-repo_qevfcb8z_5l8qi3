import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(123,97,255,0.2),transparent_60%),linear-gradient(180deg,rgba(10,10,15,0)_0%,rgba(10,10,15,0.8)_80%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-40 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Designing calm interfaces.
          <br /> Building bold systems.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 max-w-xl text-zinc-300"
        >
          UI Designer, Frontend Developer, and Graphic Artist crafting modern experiences with a dark, vibrant aesthetic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex gap-4"
        >
          <a href="#projects" className="pointer-events-auto group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-br from-fuchsia-500/80 to-indigo-600/80 hover:from-fuchsia-500 hover:to-indigo-600 text-white font-medium shadow-lg shadow-indigo-900/20 transition-all" data-cursor="link">
            View Work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#skills" className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/5 hover:bg-white/10 text-white/90 font-medium ring-1 ring-white/10" data-cursor="link">Skills</a>
        </motion.div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0b0b11] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400">
        <p>© {new Date().getFullYear()} Your Name — UI Designer • Developer • Graphic Artist</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors" data-cursor="link">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors" data-cursor="link">Behance</a>
          <a href="#" className="hover:text-white transition-colors" data-cursor="link">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

import { useEffect } from 'react'

export default function CursorFX() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.setAttribute('id', 'cursor-dot')
    cursor.style.position = 'fixed'
    cursor.style.top = '0'
    cursor.style.left = '0'
    cursor.style.width = '12px'
    cursor.style.height = '12px'
    cursor.style.borderRadius = '9999px'
    cursor.style.pointerEvents = 'none'
    cursor.style.mixBlendMode = 'exclusion'
    cursor.style.background = 'white'
    cursor.style.transform = 'translate(-50%, -50%)'
    cursor.style.zIndex = '1000'
    document.body.appendChild(cursor)

    const trail = document.createElement('div')
    trail.setAttribute('id', 'cursor-trail')
    trail.style.position = 'fixed'
    trail.style.top = '0'
    trail.style.left = '0'
    trail.style.width = '40px'
    trail.style.height = '40px'
    trail.style.borderRadius = '9999px'
    trail.style.pointerEvents = 'none'
    trail.style.background = 'radial-gradient(circle at center, rgba(168,85,247,0.2), rgba(99,102,241,0.1) 60%, transparent 70%)'
    trail.style.transform = 'translate(-50%, -50%)'
    trail.style.zIndex = '999'
    document.body.appendChild(trail)

    const move = (e) => {
      const dot = document.getElementById('cursor-dot')
      const tr = document.getElementById('cursor-trail')
      if (!dot || !tr) return
      dot.style.top = `${e.clientY}px`
      dot.style.left = `${e.clientX}px`
      tr.style.top = `${e.clientY}px`
      tr.style.left = `${e.clientX}px`
    }

    document.addEventListener('mousemove', move)

    const hoverables = () => document.querySelectorAll('[data-cursor=link]')
    const onEnter = () => { trail.style.transform = 'translate(-50%, -50%) scale(1.5)' }
    const onLeave = () => { trail.style.transform = 'translate(-50%, -50%) scale(1)' }

    const attach = () => {
      hoverables().forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()

    return () => {
      document.removeEventListener('mousemove', move)
      document.getElementById('cursor-dot')?.remove()
      document.getElementById('cursor-trail')?.remove()
      hoverables().forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return null
}

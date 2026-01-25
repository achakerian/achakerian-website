import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Career from './pages/Career'
import Research from './pages/Research'
import Education from './pages/Education'
import Projects from './pages/Projects'

function App() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    let x = window.innerWidth * 0.5
    let y = window.innerHeight * 0.5
    let tx = x
    let ty = y
    let vx = 0
    let vy = 0
    let animating = false
    let lastTime = performance.now()
    let lastMove = performance.now()
    let lastUpdateTime = 0
    const UPDATE_THROTTLE = 16 // ~60fps max for CSS updates

    const update = (posX: number, posY: number) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      const nx = Math.min(Math.max(posX / width, 0), 1)
      const ny = Math.min(Math.max(posY / height, 0), 1)
      const mx = nx * 100
      const my = ny * 100
      const mx2 = (1 - nx) * 100
      const my2 = (1 - ny) * 100
      const hueA = Math.round(115 + nx * 60)
      const hueB = Math.round(130 + ny * 40)

      // Batch all CSS updates into a single style recalculation
      root.style.cssText += `--mx:${mx}%;--my:${my}%;--mx2:${mx2}%;--my2:${my2}%;--h1:${hueA};--h2:${hueB};`
    }

    const tick = () => {
      const now = performance.now()
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now
      const speed = Math.abs(vx) + Math.abs(vy)
      const idle = now - lastMove > 2000 && speed < 0.35
      const targetX = idle ? window.innerWidth * 0.5 : tx
      const targetY = idle ? window.innerHeight * 0.5 : ty
      const dx = targetX - x
      const dy = targetY - y
      const stiffness = idle ? 0.12 : 0.5
      const damping = idle ? 1.3 : 1.05
      const speedScale = idle ? 6 : 16
      const ax = dx * stiffness - vx * damping
      const ay = dy * stiffness - vy * damping
      vx += ax * dt
      vy += ay * dt
      x += vx * dt * speedScale
      y += vy * dt * speedScale

      // Throttle CSS updates to reduce layout thrashing
      if (now - lastUpdateTime > UPDATE_THROTTLE) {
        update(x, y)
        lastUpdateTime = now
      }

      if (!idle && Math.abs(dx) + Math.abs(dy) < 0.5 && Math.abs(vx) + Math.abs(vy) < 0.5) {
        animating = false
        raf = 0
        return
      }

      raf = window.requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      tx = event.clientX
      ty = event.clientY
      lastMove = performance.now()
      if (!animating) {
        animating = true
        lastTime = performance.now()
        raf = window.requestAnimationFrame(tick)
      }
    }

    const onLeave = () => {
      tx = window.innerWidth * 0.5
      ty = window.innerHeight * 0.5
      lastMove = performance.now()
      if (!animating) {
        animating = true
        raf = window.requestAnimationFrame(tick)
      }
    }

    const onResize = () => update(x, y)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      update(x, y)
      return
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onResize)
    update(x, y)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
      if (raf) {
        window.cancelAnimationFrame(raf)
      }
    }
  }, [])

  return (
    <Router>
      <div className="page">
        <div className="interactive-bg" aria-hidden />
        <div className="interactive-noise" aria-hidden />
        <header className="nav">
          <Link to="/" className="nav__brand">
            Aaron Chakerian
            <span className="nav__loading">...</span>
          </Link>
          <nav className="nav__links">
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/research" element={<Research />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

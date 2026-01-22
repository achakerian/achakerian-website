import { HashRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Career from './pages/Career'
import Research from './pages/Research'
import Education from './pages/Education'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="page">
        <div className="bg-glow" aria-hidden />
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

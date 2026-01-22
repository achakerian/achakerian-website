function Projects() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <section className="page-section">
      <div className="page-layout">
        <div className="page-content">
          <section id="philosophy">
            <h2>Philosophy</h2>
            <p>I used to believe a good project required a perfect plan before the first line of code or the first sketch. Then I realised projects are more like muscles: they only grow through repeated, imperfect effort — small, consistent lifts that build strength over time.</p>
            <p>The sweet spot is where the real work lives: right between what I already know how to do and what feels just out of reach. Too safe and I’m coasting; too ambitious and I stall. But stand exactly there — a little stretched, a little curious — and small steps suddenly feel meaningful.</p>
            <p>Perfection is mostly procrastination wearing a fancy hat, so I start real and small. I question the “obvious” certainties kindly, and I bring people in early. A teammate’s sideways question, a friend’s laugh at a half-baked idea, or a shared “aha” moment over coffee can crack open what I thought was solid and make the whole thing lighter, more alive, more fun.</p>
            <p>That’s how I approach projects — not as a solo quest for flawlessness, but as a shared, human process of steady building, gentle questioning, and quiet celebration of the bridges crossed together.</p>
          </section>

          <section id="featured">
            <h2>Featured</h2>
            <div className="experience-item">
              <h3>
                <a href="https://studentsites.org" target="_blank" rel="noreferrer">StudentSites.org</a>
              </h3>
              <p className="experience-meta">Self-hosted GitHub Pages</p>
              <p>Student-built sites hosted in one place so they can share with friends and family.</p>
            </div>
          </section>

          <section id="in-development">
            <h2>In Development</h2>
            <div className="experience-item">
              <h3>Goal Tracking Application</h3>
              <p>Goal tracking app — details to be confirmed.</p>
            </div>

            <div className="experience-item">
              <h3>Financial Calculator</h3>
              <p className="experience-meta">Live project</p>
              <p>Financial calculator tools hosted on GitHub Pages.</p>
            </div>
          </section>

          <section id="archive">
            <h2>Archive</h2>
          </section>
        </div>
        <aside className="page-index">
          <h3>On this page</h3>
          <nav>
            <a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>Philosophy</a>
            <a href="#featured" onClick={(e) => scrollToSection(e, 'featured')}>Featured</a>
            <a href="#in-development" onClick={(e) => scrollToSection(e, 'in-development')}>In Development</a>
            <a href="#archive" onClick={(e) => scrollToSection(e, 'archive')}>Archive</a>
          </nav>
        </aside>
      </div>
    </section>
  )
}

export default Projects

function Education() {
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
            <h2>Personal Education Philosophy</h2>
            <p>Education is a muscle. Like any muscle, it gets stronger through repeated, consistent exercise—the kind that builds resilience, speed, and capability over time. Simple as that.</p>
            <p>But the real trick? Finding the sweet spot: that empowering place right between what you know and what you don’t. Too far into the known, and it’s just comfortable coasting—no growth. Too deep into the unknown, and it’s frustrating overwhelm. Stand in the middle, though, and magic happens: curiosity kicks in, small wins feel huge, and you start to feel capable, alive, ready for more.</p>
            <p>This sweet spot is best discovered and sustained with others. People are so important. A good teacher, a patient friend, a study buddy, or even a curious group—they spot when you’re edging too far one way or the other, they ask the question that nudges you back into the zone, they share an example from their own life that suddenly makes it click. They celebrate with you when the bridge forms (“I almost get it… and now I do”).</p>
            <p>That shared energy turns consistent practice from a solitary grind into something human, motivating, and far more sustainable. The muscle grows stronger, yes—but more importantly, the process feels lighter, the wins feel shared, and life quietly gets better: clearer thinking, steadier nerves, more “I can handle this” in the everyday mess.</p>
            <p>That’s the beauty: a stronger mind, built together with others, that makes being alive feel a little easier and more enjoyable.</p>
          </section>

          <section id="degrees">
            <h2>Degrees</h2>
            <div className="experience-item">
              <h3>Bachelor of Science</h3>
              <p className="experience-meta">Macquarie University | Completed 2019</p>
              <p className="experience-subject">Core studies in physics, biology, mathematics, and computing foundations</p>
            </div>

            <div className="experience-item">
              <h3>Bachelor of Engineering (Honours)</h3>
              <p className="experience-meta">Macquarie University | Completed 2025</p>
              <p className="experience-subject">Engineering design, systems thinking, and applied problem-solving</p>
            </div>
          </section>

          <section id="courses">
            <h2>Courses</h2>
            <div className="experience-item">
              <h3>Beginning to Teach (BTT)</h3>
              <p className="experience-meta">Macquarie University</p>
              <p>Completed foundational pedagogical training covering essential teaching practices, lesson design, assessment strategies, and inclusive education principles for effective higher education instruction.</p>
            </div>

            <div className="experience-item">
              <h3>Student Centred Learning & Teaching</h3>
              <p className="experience-meta">UTS Insearch</p>
              <p>Specialised professional development focused on student-centred pedagogical approaches, active learning methodologies, and creating engaging educational experiences that prioritise individual student needs and outcomes.</p>
            </div>
          </section>

          <section id="achievements">
            <h2>Achievements</h2>
            <div className="experience-item">
              <h3>1st Class Honours</h3>
              <p className="experience-meta">Bachelor of Engineering (Honours)</p>
              <p>Earned First Class Honours for sustained academic excellence and high-quality engagement and research.</p>
            </div>

            <div className="experience-item">
              <h3>Multiple High Achiever Awards</h3>
              <p className="experience-meta">Macquarie University</p>
              <p>Recognised for consistently strong results across units, demonstrating depth and reliability in academic performance.</p>
            </div>
          </section>
        </div>
        <aside className="page-index">
          <h3>On this page</h3>
          <nav>
            <a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>Philosophy</a>
            <a href="#degrees" onClick={(e) => scrollToSection(e, 'degrees')}>Degrees</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Courses</a>
            <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a>
          </nav>
        </aside>
      </div>
    </section>
  )
}

export default Education

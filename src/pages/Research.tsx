function Research() {
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
            <p>Mark Twain put it best: "It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so."</p>
            <p>In research, ignorance is manageable—you can investigate, test, learn. The real danger lurks in false certainty: the "facts" we hold too tightly because they feel obvious, comfortable, or long-accepted. These unexamined assumptions quietly derail hypotheses, bias interpretations, and lock us into dead-end paths far more than any honest unknown ever could.</p>
            <p>My approach starts with cheerful doubt toward anything labelled "sure." Progress thrives in the productive tension between established knowledge and emerging questions—poking at the edges of what seems solid, staying humble enough to revise when evidence whispers (or shouts) otherwise.</p>
          </section>

          <section id="current-research-interests">
            <h2>Current Research Interests</h2>
            <div className="experience-item">
              <h3>Inquiry-Based Learning Enhanced by AI in Software Engineering Education</h3>
              <p>Explores how AI agents support inquiry-based learning in programming and IT courses, measuring engagement, deep understanding, and the "sweet spot" of productive uncertainty in group settings.</p>
            </div>

            <div className="experience-item">
              <h3>Gamification + Micro-Credentials for Lifelong Learning Motivation</h3>
              <p>Investigates how game-like elements and short credentials boost adult and upskilling engagement in higher education and professional development, including empowerment between known and unknown.</p>
            </div>

            <div className="experience-item">
              <h3>Teacher AI Readiness</h3>
              <p>Examines training programmes that help educators use AI ethically for lesson planning and feedback without increasing workload.</p>
            </div>

            <div className="experience-item">
              <h3>Hybrid Micro-Projects with Real-Life Tie-Ins</h3>
              <p>Designs short (2–4 week) projects where students pursue personal goals, prototype quickly with AI, and share progress in small cohorts for feedback and celebration.</p>
            </div>
          </section>

          <section id="publications">
            <h2>Publications</h2>

            <div className="experience-item">
              <h3>Position Paper: Integrating Inquiry-Based Learning Pedagogy in Information Technology</h3>
              <p className="experience-meta">CSEDU 2025 (17th International Conference on Computer Supported Education), Volume 2</p>
              <p>Position paper proposing inquiry-based learning as a student-centred alternative for IT education.</p>
            </div>

            <div className="experience-item">
              <h3>Inquiry-Based Learning in Computing Education: An Experience Report on Bridging Digital Spaces and Human-Centric Learning</h3>
              <p className="experience-meta">APERA 2024 Conference Book of Abstracts</p>
              <p>Conference presentation with Macquarie University on inquiry-based learning in computing education.</p>
            </div>

            <div className="experience-item">
              <h3>AI in the Feedback Process of Undergraduate Thesis Writing: Benefits and Limitations</h3>
              <p className="experience-meta">ACUR 2024 (University of Sydney)</p>
              <p>Examines benefits and limits of AI in thesis feedback for undergraduate research writing.</p>
            </div>

            <div className="experience-item">
              <h3>Inquiry Based Learning's Efficacy in Software Engineering Education - A Systematic Review</h3>
              <p className="experience-meta">Macquarie University | Undergraduate Honours Thesis | 2025</p>
              <p>Systematic review examining the impact of inquiry-based learning in software engineering education.</p>
            </div>
          </section>

          <section id="interests">
            <h2>Interests</h2>
            <div className="experience-item">
              <h3>Energy</h3>
              <p>Exploring energy in a holistic sense—across people, organisms, and systems, not just grids and infrastructure.</p>
            </div>

            <div className="experience-item">
              <h3>Education</h3>
              <p>Exploring how people learn best and how teaching approaches can be designed for lasting impact.</p>
            </div>

            <div className="experience-item">
              <h3>Quality of Life</h3>
              <p>Investigating ways research and design can lift everyday wellbeing and reduce friction in daily life.</p>
            </div>
          </section>
        </div>
        <aside className="page-index">
          <h3>On this page</h3>
          <nav>
            <a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>Philosophy</a>
            <a href="#current-research-interests" onClick={(e) => scrollToSection(e, 'current-research-interests')}>Current Research Interests</a>
            <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')}>Publications</a>
            <a href="#interests" onClick={(e) => scrollToSection(e, 'interests')}>Interests</a>
          </nav>
        </aside>
      </div>
    </section>
  )
}

export default Research

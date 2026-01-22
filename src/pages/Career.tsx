function Career() {
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
            <p>I'm Aaron, a Sydney teacher who's spent years watching bright people get crushed by one-size-fits-all systems. I work in a number of education spaces to affect change within, but it can be rigid so I have started a business to remember that education is about the individual. How can we have the greatest impact on all our students?</p>
            <p>Forget optimised lesson plans that treat you like a rational spreadsheet entry. I tailor everything to what actually motivates you—the weird curiosity, the vanity of feeling cleverer than yesterday, the tribal thrill of finally 'getting it.'</p>
            <p>Real growth doesn't come from grinding through modules; it comes from connection: one person seeing another, sharing a ridiculous story or analogy that lands six weeks later, and suddenly the world looks different.</p>
            <p>My business isn't about selling hours—it's about selling the quiet alchemy of 'Oh, I can actually do this.' The rest (results, qualifications, testimonials) follows naturally. Because when something feels meaningful and a bit magical, people don't just learn—they stick around, refer friends, and email you years later saying thanks.</p>
            <p>If that sounds less logical and more enchanting than the usual education pitch... good. That's the point.</p>
          </section>

          <section id="experience">
            <h2>Experience</h2>

            <div className="experience-item">
              <h3>Academic Teacher</h3>
              <p className="experience-meta">UTS College | 2025</p>
              <p className="experience-subject">Computer Science & Business Studies</p>
              <ul>
                <li>Delivered project-based lectures, tutorials, and labs for diverse cohorts, enhancing software competencies and university readiness.</li>
                <li>Developed aligned lesson plans and resources using student-centred principles, improving engagement and academic outcomes.</li>
                <li>Monitored progress and provided targeted feedback, contributing to strong diploma completion and transition rates.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Sessional Teaching Academic</h3>
              <p className="experience-meta">MQ University | 2022</p>
              <p className="experience-subject">Computer Science, Business Studies & FSE Student Experience Team</p>
              <ul>
                <li>Facilitated tutorials, labs, and student experience initiatives across all undergraduate and co-badged masters level units in Computer Science, Business Studies, and FSE.</li>
                <li>Assessed work and delivered timely feedback to refine technical understanding across diverse student cohorts.</li>
                <li>Collaborated on inclusive support programmes, increasing participation and unit outcomes.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Diploma Teacher</h3>
              <p className="experience-meta">Macquarie University College | 2023</p>
              <p className="experience-subject">Computer Science & Game Design</p>
              <ul>
                <li>Taught foundational Computer Science & Game Design modules to pre-university students, building technical skills through hands-on projects for seamless bachelor progression.</li>
                <li>Marked student assessments and provided detailed feedback to support learning progression and skill development.</li>
                <li>Helped design assessments aligned with learning outcomes and industry standards to evaluate student competencies effectively.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Swim Teacher</h3>
              <p className="experience-meta">Hornsby Aquatic and Leisure Centre</p>
              <ul>
                <li>Delivered structured swimming lessons across diverse age groups and skill levels, developing water safety competencies and technical proficiency while adapting teaching methods to individual learning needs in safe, supportive environments.</li>
                <li>Monitored and assessed student progress through ongoing observation and evaluation, providing targeted feedback and developmental guidance to support skill advancement, confidence building, and progression through certification levels.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>1st Assistant Manager</h3>
              <p className="experience-meta">McDonalds Thornleigh (Head Office Store)</p>
              <p className="experience-subject">Coordinating in-store Operations and Systems</p>
              <ul>
                <li>Led comprehensive training and development initiatives for crew members at all levels, designing and delivering onboarding programmes that accelerated competency development, ensured operational excellence, and maintained service quality standards across all stations.</li>
                <li>Managed floor operations and backend systems implementation, coordinating with head office to deploy standardized training protocols while mentoring staff across operational areas to foster skill growth, leadership capabilities, and team integration.</li>
              </ul>
            </div>
          </section>

          <section id="achievements">
            <h2>Achievements</h2>

            <div className="experience-item">
              <h3>MQ Vice-Chancellor's Awards for Excellence in Education</h3>
              <p className="experience-meta">Student Nominated Finalist</p>
              <p>Recognised university-wide for exceptional teaching impact and student engagement, nominated by students for demonstrating excellence in educational practice and fostering meaningful learning experiences.</p>
            </div>

            <div className="experience-item">
              <h3>MQ FSE Excellence Awards - Excellence in Education</h3>
              <p className="experience-meta">Academic Excellence</p>
              <p>Honored for consistently delivering high-quality teaching and academic contributions across computer science and business units, supporting diverse student cohorts to achieve strong learning outcomes.</p>
            </div>

            <div className="experience-item">
              <h3>MQ FSE Excellence Awards - Professional Excellence</h3>
              <p className="experience-meta">Student Experience Team</p>
              <p>Recognised for outstanding professional contribution to student support initiatives, enhancing engagement and participation through innovative experience programmes within the Faculty of Science and Engineering.</p>
            </div>
          </section>
        </div>
        <aside className="page-index">
          <h3>On this page</h3>
          <nav>
            <a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>Philosophy</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a>
            <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a>
          </nav>
        </aside>
      </div>
    </section>
  )
}

export default Career

import { useEffect, useState } from 'react'

function Home() {
  useEffect(() => {
    document.body.classList.add('is-home')
    return () => {
      document.body.classList.remove('is-home')
    }
  }, [])

  const slides = [
    { lines: ['Welcome', "I'm Aaron"] },
    { lines: ['Primary focus on increasing quality of life'] },
    { lines: ['Through human centered design and systems'] },
    { lines: ['Collaborative initiatives solving real-world challenges'] },
    { lines: ['Empowering learners to shape their futures'] },
    { lines: ['Human oriented research, education & technology,'] },
    { lines: ['Aaron Chakerian', 'Engineer - Educator - Developer'] },
  ]

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return

    const holdMs = 3200
    const fadeMs = 1100
    let t1: number | undefined
    let t2: number | undefined

    const schedule = () => {
      t1 = window.setTimeout(() => {
        setVisible(false)
        t2 = window.setTimeout(() => {
          setIndex((i) => (i + 1) % slides.length)
          setVisible(true)
          schedule()
        }, fadeMs)
      }, holdMs)
    }

    schedule()
    return () => {
      if (t1) window.clearTimeout(t1)
      if (t2) window.clearTimeout(t2)
    }
  }, [slides.length])

  return (
    <div className="landing">
      <div className="landing__content">
        <section className="ai-screen" aria-label="Intro">
          <div className={`ai-rotator ai-rotator--s${index} ${visible ? 'is-in' : 'is-out'}`}>
            {slides[index].lines.map((line) => (
              <p key={line} className="ai-line">
                {line}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

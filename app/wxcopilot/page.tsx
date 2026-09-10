import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WxCoPilot | Andrew Gibson',
  description: 'A closer look at WxCoPilot, an aviation weather and flight decision tool for UK pilots.',
}

const capabilities = [
  {
    number: '01',
    title: 'Flyability Score',
    description: 'A seven-day view of flying potential, scored from 0 to 100 against the pilot\'s aircraft and personal weather limits.',
  },
  {
    number: '02',
    title: 'Flight Decision',
    description: 'Automated go or no-go guidance that brings current and forecast aviation conditions together with aircraft parameters.',
  },
  {
    number: '03',
    title: 'Flight & Lesson Snapshot',
    description: 'A quick check for a planned date and time, giving pilots a focused safety status for an upcoming flight or lesson.',
  },
]

export default function WxCoPilotPage() {
  return (
    <main className="project-page">
      <div className="topline" aria-hidden="true"><span>AG / 2026</span><span>Project 01 / WxCoPilot</span></div>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="/">Andrew<span>.</span></a>
        <a className="nav-contact" href="/">Back to portfolio <span>↩</span></a>
      </nav>

      <section className="project-hero shell">
        <div className="project-hero-copy">
          <p className="eyebrow">Work in progress / 2026</p>
          <h1>Weather-aware<br /><em>flying decisions.</em></h1>
          <p className="project-lede">WxCoPilot is an aviation weather and flight decision tool built specifically for UK student and private pilots.</p>
          <a className="button button-dark" href="https://wxcopilot.co.uk" target="_blank" rel="noreferrer">Open the portal <span>↗</span></a>
        </div>
        <div className="project-hero-art">
          <img src="/images/wxcopilotrev.jpeg" alt="WxCoPilot logo" />
          <span className="project-hero-caption">A calmer way to read the sky.</span>
        </div>
      </section>

      <section className="project-story shell">
        <div>
          <p className="eyebrow">The idea</p>
          <h2>Better information<br /><em>before take-off.</em></h2>
        </div>
        <div className="project-story-copy">
          <p>Weather decisions are part of every flight, but the information pilots need is often spread across forecasts, limits, aircraft details, and experience.</p>
          <p>WxCoPilot brings those pieces into one focused view. It is designed to help pilots make a more informed decision without pretending that software can replace judgement.</p>
        </div>
      </section>

      <section className="capability-band">
        <div className="shell">
          <div className="section-heading project-section-heading"><div><p className="eyebrow">Inside the product</p><h2>Three useful<br /><em>signals.</em></h2></div><p className="section-intro">The first release is built around the moments where a clear answer is most useful.</p></div>
          <div className="capability-list">{capabilities.map((capability) => <article className="capability" key={capability.number}><span className="capability-number">{capability.number}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div>
        </div>
      </section>

      <footer className="project-footer"><div className="shell footer-bottom"><a href="/">← Back to portfolio</a><a href="https://wxcopilot.co.uk" target="_blank" rel="noreferrer">Open WxCoPilot ↗</a></div></footer>
    </main>
  )
}

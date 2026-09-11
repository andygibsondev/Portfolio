import type { Metadata } from 'next'
import SiteNav from '../components/site-nav'

export const metadata: Metadata = {
  title: 'Aviation journal | Andrew Gibson',
  description: 'Flight notes, lessons, and observations from learning to fly towards an NPPL.',
}

const journalEntries = [
  {
    number: '01',
    date: 'Learning in public',
    title: 'The long way up',
    excerpt: 'A flight journal about lessons, milestones, weather, and the small decisions that make progress possible.',
    status: 'First entry / coming soon',
  },
  {
    number: '02',
    date: 'Flight notes',
    title: 'Reading the conditions',
    excerpt: 'What aviation weather teaches us about preparation, uncertainty, and knowing when to wait for a better day.',
    status: 'Drafting',
  },
  {
    number: '03',
    date: 'The learning curve',
    title: 'One careful lesson at a time',
    excerpt: 'The practical and personal lessons that sit underneath the hours logged and the skills being built.',
    status: 'Planned',
  },
]

export default function AviationPage() {
  return (
    <main className="aviation-page">
      <div className="topline" aria-hidden="true"><span>AG / 2026</span><span>Aviation journal</span></div>
      <SiteNav />

      <header className="aviation-hero shell">
        <div>
          <p className="eyebrow">Aviation / learning in public</p>
          <h1>The long way<br /><em>up.</em></h1>
          <p className="aviation-lede">Flight notes from learning to fly, working towards an NPPL, and paying attention to what the sky has to teach.</p>
        </div>

      </header>

      <div className="shell aviation-channel-link"><a className="button button-light aviation-youtube" href="https://www.youtube.com/@pilotandyuk" target="_blank" rel="noreferrer"><svg className="youtube-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>Watch on YouTube <span>↗</span></a></div>

      <section className="aviation-intro shell">
        <p className="eyebrow">Why this journal exists</p>
        <div><h2>Progress is made<br /><em>one lesson at a time.</em></h2><p>Learning to fly is a useful counterweight to a life spent around software. There is less room for abstraction, more room for weather, judgement, and the quiet discipline of doing the basics well.</p><p>This is a place to keep track of the journey: the lessons that stayed with me, the decisions behind each flight, and the view from the other side of the runway.</p></div>
      </section>

      <section className="aviation-journal shell">
        <div className="section-heading aviation-section-heading"><div><p className="eyebrow">The journal</p><h2>Notes from<br /><em>the circuit.</em></h2></div><p className="section-intro">A growing collection of lessons, observations, and small victories from the learning process.</p></div>
        <div className="journal-list">{journalEntries.map((entry) => <article className="journal-entry" key={entry.number}><span className="journal-number">{entry.number}</span><div><p className="journal-date">{entry.date}</p><h3>{entry.title}</h3><p className="journal-excerpt">{entry.excerpt}</p><span className="journal-status">{entry.status}</span></div><span className="journal-arrow">↗</span></article>)}</div>
      </section>

      <footer className="project-footer"><div className="shell footer-bottom"><a href="/">← Back to portfolio</a><a href="/interests">Outside the editor ↗</a></div></footer>
    </main>
  )
}

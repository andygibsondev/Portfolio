import type { Metadata } from 'next'
import SiteNav from '../components/site-nav'

export const metadata: Metadata = {
  title: 'Outside the editor | Andrew Gibson',
  description: 'A closer look at Andrew Gibson\'s interests beyond software development.',
}

const interestDetails = [
  {
    id: 'aviation',
    number: '01',
    title: 'Aviation',
    intro: 'Learning to fly and working towards an NPPL.',
    body: 'Aviation has a useful way of making progress visible. Every lesson rewards preparation, attention, and the willingness to make a careful decision when conditions change. It is also where the idea for WxCoPilot began: turning a complicated weather picture into a clearer starting point for a pilot\'s own judgement.',
  },
  {
    id: 'technology',
    number: '02',
    title: 'Technology',
    intro: 'Following the edges of what is becoming possible.',
    body: 'I am interested in the space where AI, product thinking, and craft meet. The most exciting work is rarely about technology for its own sake; it is about finding a simpler way through a real problem and building systems that remain useful after the novelty has gone.',
  },
  {
    id: 'mentoring',
    number: '03',
    title: 'Mentoring',
    intro: 'Making room for people early in their careers to find their stride.',
    body: 'Good mentoring is less about having the perfect answer and more about asking the question that helps someone discover their own. I enjoy helping people build confidence, make sense of unfamiliar systems, and develop a way of working that feels like theirs.',
  },
]

export default function InterestsPage() {
  return (
    <main className="interests-page">
      <div className="topline" aria-hidden="true"><span>AG / 2026</span><span>Outside the editor</span></div>
      <SiteNav />

      <header className="interests-hero shell">
        <p className="eyebrow">Outside the editor</p>
        <h1>More than<br /><em>just software.</em></h1>
        <p>Three interests that keep the work fresh, the perspective wide, and the calendar occasionally full of surprises.</p>
      </header>

      <section className="interest-details shell" aria-label="Interests">
        {interestDetails.map((interest) => <article className="interest-detail" id={interest.id} key={interest.id}><span className="interest-detail-number">{interest.number}</span><div><p className="eyebrow">{interest.title}</p><h2>{interest.intro}</h2><p>{interest.body}</p></div></article>)}
      </section>

      <footer className="project-footer"><div className="shell footer-bottom"><a href="/">← Back to portfolio</a><a href="/wxcopilot">See WxCoPilot ↗</a></div></footer>
    </main>
  )
}

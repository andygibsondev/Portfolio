import SiteNav from './components/site-nav'

const projects = [
  {
    number: '01',
    title: 'wxCoPilot',
    description: (
      <p>WxCoPilot is an <strong>aviation weather and flight decision tool</strong> for <strong>UK student and private pilots</strong>, combining a 7-day Flyability Score, automated go/no-go recommendations, and quick checks for upcoming flights and lessons.</p>
    ),
    tags: ['Aviation', 'Software', 'Planning', 'Weather', 'Flight Safety'],
    accent: 'blue',
    category: 'Work In Progress / 2026',
    image: '/images/wxcopilotrev.jpeg',
    imageAlt: 'WxCoPilot logo',
    url: '/wxcopilot',
  },
]

const interests = [
  ['01', 'Aviation', 'Learning to fly and working towards an NPPL. The best reminder that progress is made one careful lesson at a time.', '/aviation', 'Read the journal'],
  ['02', 'Technology', 'Following the edges of what is becoming possible, especially where AI, product thinking, and craft meet.', '/interests#technology', 'Explore technology'],
  ['03', 'Mentoring', 'Making room for people early in their careers to ask better questions and find their own stride.', '/interests#mentoring', 'Read more'],
]

export default function Home() {
  return (
    <main>
      <div className="topline" aria-hidden="true"><span>AG / 2026</span><span>Lisburn, Northern Ireland</span></div>
      <SiteNav home />

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Senior software developer <span>•</span> builder <span>•</span> mentor</p>
          <h1>Good software<br /><em>leaves room</em><br />for good thinking.</h1>
          <p className="hero-intro">I&apos;m Andrew, a senior software developer helping teams design, modernise, and ship dependable digital products. I care about clear systems, thoughtful teams, and the next interesting idea.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <span>↓</span></a>
            <a className="button button-light" href="https://www.linkedin.com/in/andrewgibsonni/" target="_blank" rel="noreferrer"><svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.1H1.7V22h3.5V8.1ZM3.45 2A2.05 2.05 0 1 0 3.45 6.1 2.05 2.05 0 0 0 3.45 2ZM22.3 14.03c0-4.18-2.23-6.13-5.2-6.13-2.4 0-3.47 1.32-4.08 2.25V8.1H9.5V22h3.52v-6.88c0-1.81.34-3.57 2.59-3.57 2.21 0 2.24 2.07 2.24 3.69V22h3.52l.93-7.97Z" /></svg>LinkedIn <span>↗</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="orbit-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot" /><span className="orbit-label">25+<small>years making</small></span></div>
          <p className="side-note">A considered collection of projects, questions, and things I&apos;m learning in public.</p>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-heading"><p className="eyebrow">About Andrew</p><h2>Useful work,<br /><em>thoughtfully made.</em></h2></div>
          <div className="about-copy"><p>With over 25 years of experience, I combine deep technical expertise with a passion for solving complex challenges. I excel in guiding teams through the full software development lifecycle, leveraging technologies like JavaScript, Next.js, and .NET to deliver high-quality solutions.</p><p>As both a Senior Developer and Agile Scrum Master, I have a proven track record of leading high-performing teams, optimising workflows, and delivering projects on time and with precision. My approach blends strong technical skills with Agile best practices to ensure adaptability, continuous improvement, and rapid delivery.</p><p>Driven by a continuous learning mindset, I stay ahead of industry trends, embracing new tools and methodologies to create impactful, future-ready solutions.</p><div className="signals"><div><strong>20+</strong><span>enterprise<br />projects</span></div><div><strong>20+</strong><span>people<br />mentored</span></div><div><strong>∞</strong><span>curiosity<br />remaining</span></div></div></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>One thing<br /><em>in motion.</em></h2></div><p className="section-intro">A product taking shape at the intersection of aviation, weather, and better decisions.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project project-${project.accent}`} key={project.number}><div className="project-mark"><span>{project.number}</span><span className="arrow">↗</span></div><div className="project-image-wrap"><img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" /></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><div className="project-description">{project.description}</div><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link button button-dark" href={project.url}>Learn more <span>↗</span></a></div></article>)}</div>
      </section>

      <section className="manifesto"><div className="shell manifesto-inner"><p className="eyebrow">How I work</p><blockquote>“Make it clear enough to change, and solid enough to trust.”</blockquote><p className="manifesto-credit">A simple standard for software, teams, and the things I choose to spend time on.</p></div></section>

      <section className="section shell interests" id="interests">
        <div className="section-heading"><div><p className="eyebrow">Outside the editor</p><h2>More than<br /><em>just software.</em></h2></div><p className="section-intro">The interests that keep the work fresh, the perspective wide, and the calendar occasionally full of surprises.</p></div>
        <div className="interest-list">{interests.map(([number, title, description, url, linkLabel]) => <a className="interest" href={url} key={number}><span className="interest-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="interest-link">{linkLabel}<span aria-hidden="true">↗</span></span></a>)}</div>
      </section>

      <footer className="footer"><div className="shell footer-main"><div><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div><a className="footer-email" href="mailto:andrew@thegibsons.info">andrew@thegibsons.info <span>↗</span></a></div><div className="shell footer-bottom"><span>© 2026 Andrew Gibson</span><span>Built with care in Northern Ireland</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  )
}

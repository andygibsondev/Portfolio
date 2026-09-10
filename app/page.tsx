const projects = [
  {
    number: '01',
    title: 'wxCoPilot',
    description: (
      <>
        <p>WxCoPilot is an <strong>aviation weather and flight decision tool</strong> built specifically for <strong>UK student and private pilots</strong>.</p>
        <p>The platform helps pilots assess weather conditions and make safe flying choices through three core features:</p>
        <ul>
          <li><strong>Flyability Score:</strong> Rates the upcoming 7 days on a scale of 0–100 based on the pilot&apos;s specific aircraft type and personal weather limits.</li>
          <li><strong>Flight Decision:</strong> Provides automated go/no-go recommendations by analyzing current and forecasted aviation conditions against aircraft parameters.</li>
          <li><strong>Flight &amp; Lesson Snapshot:</strong> Allows pilots to input planned dates and times to quickly check the go/no-go safety status for individual upcoming flights.</li>
        </ul>
      </>
    ),
    tags: ['Aviation', 'Software', 'Planning', 'Weather', 'Flight Safety'],
    accent: 'blue',
    category: 'Work In Progress / 2026',
    image: '/images/wxcopilotlogo.png',
    imageAlt: 'WxCoPilot logo',
  },
]

const interests = [
  ['01', 'Aviation', 'Learning to fly and working towards an NPPL. The best reminder that progress is made one careful lesson at a time.'],
  ['02', 'Technology', 'Following the edges of what is becoming possible, especially where AI, product thinking, and craft meet.'],
  ['03', 'Mentoring', 'Making room for people early in their careers to ask better questions and find their own stride.'],
]

export default function Home() {
  return (
    <main>
      <div className="topline" aria-hidden="true"><span>AG / 2026</span><span>Lisburn, Northern Ireland</span></div>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#home">Andrew<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
        </div>
        <a className="nav-contact" href="mailto:andrew@thegibsons.info">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Senior software developer <span>•</span> builder <span>•</span> mentor</p>
          <h1>Good software<br /><em>leaves room</em><br />for good thinking.</h1>
          <p className="hero-intro">I&apos;m Andrew, a senior software developer helping teams design, modernise, and ship dependable digital products. I care about clear systems, thoughtful teams, and the next interesting idea.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <span>↓</span></a>
            <a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="orbit-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot" /><span className="orbit-label">25+<small>years making</small></span></div>
          <p className="side-note">A considered collection of projects, questions, and things I&apos;m learning in public.</p>
        </div>
      </section>

      <section className="signal-band" id="about">
        <div className="shell signal-grid">
          <p className="eyebrow">A few useful signals</p>
          <div className="signals"><div><strong>20+</strong><span>enterprise<br />projects</span></div><div><strong>20+</strong><span>people<br />mentored</span></div><div><strong>∞</strong><span>curiosity<br />remaining</span></div></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Things with<br /><em>somewhere to go.</em></h2></div><p className="section-intro">A mix of professional practice and personal projects. Each one is an excuse to learn something properly.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project project-${project.accent}`} key={project.number}><div className="project-mark"><span>{project.number}</span><span className="arrow">↗</span></div><div className="project-image-wrap"><img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" /></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><div className="project-description">{project.description}</div><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="manifesto"><div className="shell manifesto-inner"><p className="eyebrow">How I work</p><blockquote>“Make it clear enough to change, and solid enough to trust.”</blockquote><p className="manifesto-credit">A simple standard for software, teams, and the things I choose to spend time on.</p></div></section>

      <section className="section shell interests" id="interests">
        <div className="section-heading"><div><p className="eyebrow">Outside the editor</p><h2>More than<br /><em>just software.</em></h2></div><p className="section-intro">The interests that keep the work fresh, the perspective wide, and the calendar occasionally full of surprises.</p></div>
        <div className="interest-list">{interests.map(([number, title, description]) => <article className="interest" key={number}><span className="interest-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="interest-arrow">↗</span></article>)}</div>
      </section>

      <footer className="footer"><div className="shell footer-main"><div><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div><a className="footer-email" href="mailto:andrew@thegibsons.info">andrew@thegibsons.info <span>↗</span></a></div><div className="shell footer-bottom"><span>© 2026 Andrew Gibson</span><span>Built with care in Northern Ireland</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  )
}

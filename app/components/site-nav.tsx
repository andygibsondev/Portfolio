type SiteNavProps = {
  home?: boolean
}

export default function SiteNav({ home = false }: SiteNavProps) {
  const sectionHref = (section: string) => home ? `#${section}` : `/#${section}`

  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href={home ? '#home' : '/'}>Andrew<span>.</span>Gibson</a>
      <div className="nav-links">
        <a href={sectionHref('work')}>Work</a>
        <a href={sectionHref('about')}>About</a>
        <a href={sectionHref('interests')}>Interests</a>
      </div>
      <a className="nav-contact" href="mailto:andrew@thegibsons.info">Let&apos;s talk <span>↗</span></a>
    </nav>
  )
}

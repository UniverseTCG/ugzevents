export default function HomePageHeroBlade({ 
  title, 
  date, 
  buttons 
}: { 
  title: string, 
  date: string, 
  buttons: { text: string, url: string }[] 
}) {
  return (
    <section style={{
      position: 'relative',
      height: '600px',
      width: '100%',
      backgroundColor: '#0a215a', // Fallback
      backgroundImage: `url('https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Gradient Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', /* Modified from 50% for mobile */
        height: '100%',
        background: 'linear-gradient(90deg, rgba(10,33,90,0.98) 0%, rgba(10,33,90,0.85) 60%, rgba(10,33,90,0.2) 100%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <div className="animate-spring" style={{ maxWidth: '500px', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
          {/* Logo Placeholder (Original: regional-championships-logo-2x.webp) */}
          <img 
            src="https://championships.pokemon.com/static-assets/images/homepage-hero/regional-championships-logo-2x.webp" 
            alt="Logo" 
            style={{ maxWidth: '300px', marginBottom: 'var(--space-6)' }} 
          />
          <h1 style={{ color: 'white !important', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: 'var(--space-4)' }}>
            {title}
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', fontWeight: 600, opacity: 0.9, marginBottom: 'var(--space-8)' }}>
            {date}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {buttons.map((btn, idx) => (
              <a key={idx} href={btn.url} className="btn-official btn-yellow">
                {btn.text} 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

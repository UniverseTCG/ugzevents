export default function DarkBackgroundBlade({ 
  title, 
  copyHtml, 
  buttons 
}: { 
  title: string, 
  copyHtml: string, 
  buttons: { text: string, url: string }[] 
}) {
  return (
    <section style={{
      backgroundColor: '#0a215a',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="container animate-spring" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 'var(--space-6)', color: 'white' }}>
          {title}
        </h2>
        <div 
          style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}
          dangerouslySetInnerHTML={{ __html: copyHtml }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {buttons.map((btn, idx) => (
            <a key={idx} href={btn.url} className="btn-official btn-white-outline">
              {btn.text}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

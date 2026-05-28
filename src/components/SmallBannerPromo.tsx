export default function SmallBannerPromo({
  title,
  buttons
}: {
  title: string,
  buttons: { text: string, url: string }[]
}) {
  return (
    <section style={{
      backgroundImage: `url('https://championships.pokemon.com/static-assets/images/small-promo/regionals-black-background.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '3rem 2rem'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '2rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img 
            src="https://championships.pokemon.com/static-assets/images/small-promo/play-pokemon-logo.png" 
            alt="Play Pokemon" 
            style={{ width: 'clamp(50px, 10vw, 80px)', height: 'clamp(50px, 10vw, 80px)' }} 
          />
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'white', margin: 0, textTransform: 'uppercase', fontWeight: 800 }}>
            {title}
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {buttons.map((btn, idx) => (
            <a key={idx} href={btn.url} className="btn-official btn-white-outline" style={{ background: 'transparent', color: 'white', borderColor: 'white', border: '3px solid white', textShadow: 'none', boxShadow: 'none' }}>
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

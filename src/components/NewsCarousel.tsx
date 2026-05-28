export default function NewsCarousel({ lang = 'es' }: { lang?: string }) {
  const news = [
    { date: "Novedad", title: "Premios del Main Event Revelados", type: "JCC y VJ", bg: "magenta", link: `/${lang}/eventos/mollet-tcg-fest` },
    { date: "Retransmisión", title: "Z2 Team: Hub de Stream Multipunto", type: "Pantalla Gigante Confirmada", bg: "green", link: `/${lang}/eventos/mollet-tcg-fest` },
    { date: "Aviso", title: "¡Quedan pocas entradas! Aforo de 300 pax", type: "Inscripciones", bg: "blue", link: `/${lang}/eventos/mollet-tcg-fest` }
  ];

  return (
    <section style={{ padding: '4rem 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--poke-navy)',
        zIndex: -1
      }}></div>

      <div className="container">
          <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          color: 'var(--championship-gold)',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-8)',
          letterSpacing: '-0.02em'
        }}>
          Noticias del TCG Fest
        </h2>

        <div style={{ display: 'flex', gap: 'var(--space-6)', overflowX: 'auto', paddingBottom: 'var(--space-6)', scrollSnapType: 'x mandatory' }}>
          {news.map((item, idx) => (
            <a href={item.link} key={idx} className="glass-card" style={{ flex: '0 0 min(85vw, 350px)', padding: 0, overflow: 'hidden', scrollSnapAlign: 'start', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '180px', 
                backgroundColor: item.bg === 'magenta' ? '#d9468f' : item.bg === 'green' ? 'var(--poke-green)' : 'var(--poke-blue)',
                backgroundImage: 'url("https://championships.pokemon.com/static-assets/images/backgrounds/checkerboard.png")',
                backgroundSize: 'cover',
                display: 'grid',
                placeItems: 'center'
              }}>
                <img src="https://championships.pokemon.com/static-assets/images/small-promo/play-pokemon-logo.png" style={{ height: '60px' }} alt="Play" />
              </div>
              <div style={{ padding: 'var(--space-6)', textAlign: 'center', height: '100%', minHeight: '220px', display: 'flex', flexDirection: 'column', background: 'white' }}>
                <div className="pill" style={{ alignSelf: 'center', marginBottom: 'var(--space-3)', background: 'var(--championship-bg)' }}>{item.date}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 'auto', color: 'var(--poke-navy)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: 'var(--space-4)', color: 'var(--text-secondary)' }}>{item.type}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href={`/${lang}/eventos/mollet-tcg-fest`} className="btn-official btn-white-outline" style={{ background: 'white', color: 'var(--poke-navy)' }}>
            Ir al Portal del Evento ‣
          </a>
        </div>
      </div>
    </section>
  )
}

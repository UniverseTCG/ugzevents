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
        background: 'linear-gradient(135deg, rgba(231,134,141,1) 0%, rgba(209,150,192,1) 100%)',
        zIndex: -1
      }}></div>

      <div className="container">
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          fontWeight: 900,
          color: 'white',
          textTransform: 'uppercase',
          textShadow: '3px 3px 0px black, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          marginBottom: '3rem',
          letterSpacing: '0.05em'
        }}>
          Noticias del TCG Fest
        </h2>

        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem' }}>
          {news.map((item, idx) => (
            <a href={item.link} key={idx} style={{ flex: '0 0 350px', borderRadius: '16px', overflow: 'hidden', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', backgroundColor: '#FFCB05', textDecoration: 'none' }}>
              <div style={{ 
                height: '180px', 
                backgroundColor: item.bg === 'magenta' ? '#d9468f' : item.bg === 'green' ? '#4DAD5B' : '#3161A5',
                backgroundImage: 'url("https://championships.pokemon.com/static-assets/images/backgrounds/checkerboard.png")',
                backgroundSize: 'cover',
                display: 'grid',
                placeItems: 'center'
              }}>
                <img src="https://championships.pokemon.com/static-assets/images/small-promo/play-pokemon-logo.png" style={{ height: '60px' }} alt="Play" />
              </div>
              <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: '#111827', height: '100%', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontWeight: 800, marginBottom: '1rem', fontSize: '1rem' }}>{item.date}</p>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 'auto' }}>{item.title}</h3>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', marginTop: '1.5rem' }}>{item.type}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href={`/${lang}/eventos/mollet-tcg-fest`} style={{ 
            display: 'inline-block', 
            backgroundColor: 'white', 
            color: '#0a215a', 
            padding: '1rem 3rem', 
            borderRadius: '999px', 
            fontWeight: 800, 
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            textDecoration: 'none'
          }}>
            Ir al Portal del Evento ‣
          </a>
        </div>
      </div>
    </section>
  )
}

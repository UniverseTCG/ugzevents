export default function SocialWall() {
  return (
    <section className="container bg-halftone-pattern clip-diagonal-reverse" style={{ padding: 'var(--space-16) var(--space-4)', marginTop: '-4vw', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '4vw auto 0' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          Únete a la <span style={{ color: 'var(--poke-red)' }}>Comunidad</span>
        </h2>
        
        <div className="grid grid-cols-3">
          {/* Mockup Twitter/X Card 1 */}
          <div className="glass-card clip-card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--poke-blue)' }}></div>
              <div>
                <p style={{ fontWeight: 800, color: 'var(--poke-navy)' }}>@UGZ_Events</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hace 2 horas</p>
              </div>
            </div>
            <p style={{ fontWeight: 500, lineHeight: 1.6 }}>¡Ya es oficial! El Mollet TCG Fest contará con retransmisión a varias cámaras gracias a Z2 Team. 🔥 No te quedes sin entrada.</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
              <span>❤️ 245</span>
              <span>🔄 42</span>
            </div>
          </div>

          {/* Mockup Instagram Card 2 */}
          <div className="glass-card clip-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ height: '200px', backgroundColor: 'var(--poke-red)' }}></div>
            <div style={{ padding: 'var(--space-4)' }}>
              <p style={{ fontWeight: 800, color: 'var(--poke-navy)', marginBottom: '0.5rem' }}>ugzevents_oficial</p>
              <p style={{ fontWeight: 500, fontSize: '0.9rem' }}>Preparando los premios para el fin de semana... 🏆</p>
            </div>
          </div>

          {/* Mockup Twitter/X Card 3 */}
          <div className="glass-card clip-card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--poke-yellow)' }}></div>
              <div>
                <p style={{ fontWeight: 800, color: 'var(--poke-navy)' }}>@JugadorPro</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hace 5 horas</p>
              </div>
            </div>
            <p style={{ fontWeight: 500, lineHeight: 1.6 }}>Increíble el nivel que se espera en el Mollet TCG Fest. Llevo meses testeando el mazo para este torneo. ¡Nos vemos allí!</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
              <span>❤️ 89</span>
              <span>🔄 12</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <a href="#" className="btn-official btn-red">Ver Todo el Contenido</a>
        </div>
      </div>
    </section>
  )
}

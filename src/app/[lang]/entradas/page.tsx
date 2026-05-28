import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: resolvedParams.lang === 'en' ? 'Buy Tickets - Mollet TCG Fest' : 
           resolvedParams.lang === 'ca' ? 'Comprar Entrades - Mollet TCG Fest' : 
           'Comprar Entradas - Mollet TCG Fest',
    description: 'Asegura tu entrada para el mayor torneo de Pokémon en Cataluña. Main Event, Side Events y acceso para espectadores.'
  };
}

export default async function EntradasPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: 'var(--space-16)', paddingTop: 'var(--space-12)' }}>
      <section className="container" style={{ padding: 'var(--space-16) var(--space-4)' }}>
        <h1 className="animate-spring" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', textAlign: 'center', marginBottom: 'var(--space-4)', letterSpacing: '-0.02em' }}>
          Entradas y Pases
        </h1>
        <p className="animate-spring" style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)', maxWidth: '600px', margin: '0 auto var(--space-12)' }}>
          Aforo estrictamente limitado a 300 personas. Asegura tu plaza antes de que se agoten.
        </p>

        <div className="grid grid-cols-2 animate-spring" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--poke-red)' }}></div>
            <div className="pill" style={{ alignSelf: 'center', marginBottom: 'var(--space-4)' }}>Más Vendido</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', margin: 0 }}>Main Event</h3>
            <p style={{ fontSize: '4rem', fontWeight: 900, margin: 'var(--space-2) 0 var(--space-4)', color: 'var(--poke-red)', letterSpacing: '-0.03em' }}>30€</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: 'var(--space-8)', gap: 'var(--space-3)', display: 'flex', flexDirection: 'column', fontWeight: 600, color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-red)', fontWeight: 900 }}>✓</span> Acceso Sábado 5 y Domingo 6</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-red)', fontWeight: 900 }}>✓</span> Plaza garantizada en el Torneo Oficial</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-red)', fontWeight: 900 }}>✓</span> Welcome Pack Exclusivo</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-red)', fontWeight: 900 }}>✓</span> Derecho a optar al Prizepool (800€)</li>
            </ul>
            <a href="#" className="btn-official btn-red" style={{ marginTop: 'auto', display: 'block', width: '100%', fontSize: '1.2rem', padding: '1rem' }}>Comprar Main Event</a>
          </div>

          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--poke-blue)' }}></div>
            <div className="pill" style={{ alignSelf: 'center', marginBottom: 'var(--space-4)', opacity: 0 }}>Spacer</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', margin: 0 }}>Side Events</h3>
            <p style={{ fontSize: '4rem', fontWeight: 900, margin: 'var(--space-2) 0 var(--space-4)', color: 'var(--poke-blue)', letterSpacing: '-0.03em' }}>15€</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: 'var(--space-8)', gap: 'var(--space-3)', display: 'flex', flexDirection: 'column', fontWeight: 600, color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-blue)', fontWeight: 900 }}>✓</span> Acceso 1 Día (Sábado o Domingo)</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-blue)', fontWeight: 900 }}>✓</span> Participación ilimitada en Ligas Menores</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-blue)', fontWeight: 900 }}>✓</span> Puntos para el ranking local</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--poke-blue)', fontWeight: 900 }}>✓</span> Entra en Sorteos de material oficial</li>
            </ul>
            <a href="#" className="btn-official btn-blue" style={{ marginTop: 'auto', display: 'block', width: '100%', fontSize: '1.2rem', padding: '1rem' }}>Comprar Side Events</a>
          </div>

        </div>

        {/* Third tier: Spectator / Content Creator */}
        <div className="grid grid-cols-2 animate-spring" style={{ maxWidth: '1000px', margin: 'var(--space-8) auto 0' }}>
           <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--poke-green)' }}></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', margin: 0 }}>Espectador</h3>
            <p style={{ fontSize: '3rem', fontWeight: 900, margin: 'var(--space-2) 0 var(--space-4)', color: 'var(--poke-green)', letterSpacing: '-0.03em' }}>5€</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', fontWeight: 500 }}>Acceso total al recinto para ver las partidas, disfrutar de la zona chill y tiendas.</p>
            <a href="#" className="btn-official" style={{ marginTop: 'auto', background: 'var(--poke-green)', color: 'white' }}>Pase de Espectador</a>
          </div>

          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--poke-yellow)' }}></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', margin: 0 }}>Creator Pass</h3>
            <p style={{ fontSize: '3rem', fontWeight: 900, margin: 'var(--space-2) 0 var(--space-4)', color: 'var(--poke-yellow)', letterSpacing: '-0.03em' }}>Gratis</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', fontWeight: 500 }}>¿Eres creador de contenido de Pokémon? Ven a grabar y castear el evento.</p>
            <a href={`/${lang}/info#contacto`} className="btn-official btn-yellow" style={{ marginTop: 'auto' }}>Solicitar Acreditación</a>
          </div>
        </div>
      </section>
    </div>
  )
}

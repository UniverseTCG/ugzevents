import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: resolvedParams.lang === 'en' ? 'Live Stream - Mollet TCG Fest' : 
           resolvedParams.lang === 'ca' ? 'En Directe - Mollet TCG Fest' : 
           'En Directo - Mollet TCG Fest',
    description: 'Sigue el Mollet TCG Fest en directo gracias al equipo de retransmisión Z2 Team. Bracket, POV y entrevistas a creadores de contenido.'
  };
}

export default async function LivePage(props: { params: Promise<{ lang: string }> }) {
  await props.params;

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: 'var(--space-16)', paddingTop: 'var(--space-12)', minHeight: '100vh' }}>
      <section className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <div className="pill" style={{ background: 'rgba(227, 53, 13, 0.1)', color: 'var(--poke-red)', border: '1px solid rgba(227, 53, 13, 0.2)', marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--poke-red)', borderRadius: '50%', marginRight: '8px', animation: 'pulse 2s infinite' }}></span>
            EN DIRECTO
          </div>
          <h1 className="animate-spring" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Z2 Team Stream Hub
          </h1>
          <p className="animate-spring" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Sigue las rondas del Main Event, entrevistas a influencers y la mesa de comentaristas en tiempo real.
          </p>
        </div>

        {/* Streaming Embed Placeholder */}
        <div className="card animate-spring" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto var(--space-16)', 
          padding: 0, 
          overflow: 'hidden', 
          backgroundColor: '#000', 
          aspectRatio: '16/9',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid rgba(0,0,0,0.1)'
        }}>
          {/* Here we would put the real Twitch/YouTube iframe. Using a placeholder for now. */}
          <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--poke-red)', marginBottom: '1rem' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Stream Offline</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>La retransmisión comenzará el Sábado 5 a las 09:00 AM</p>
          </div>
        </div>

        {/* Content Creators / Influencers */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', marginBottom: 'var(--space-6)', textAlign: 'center' }}>
            Creadores Invitados
          </h2>
          <div className="grid grid-cols-3">
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
               <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--poke-blue)', margin: '0 auto var(--space-4)' }}></div>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--poke-navy)' }}>Jugador VGC 1</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Comentarista Invitado</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
               <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--poke-red)', margin: '0 auto var(--space-4)' }}></div>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--poke-navy)' }}>Z2 Caster</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Host Principal</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
               <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--poke-yellow)', margin: '0 auto var(--space-4)' }}></div>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--poke-navy)' }}>Influencer TCG</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Entrevistas y Deck Techs</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: resolvedParams.lang === 'en' ? 'Event Info & FAQ - Mollet TCG Fest' : 
           resolvedParams.lang === 'ca' ? 'Informació de l\'Esdeveniment - Mollet TCG Fest' : 
           'Información del Evento - Mollet TCG Fest',
    description: 'Toda la información sobre el Mollet TCG Fest: Cómo llegar al Merca Vell, horarios, aparcamiento, preguntas frecuentes y contacto.'
  };
}

export default async function InfoPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: 'var(--space-16)', paddingTop: 'var(--space-12)' }}>
      
      {/* HEADER INFO */}
      <section className="container" style={{ padding: 'var(--space-8) var(--space-4)', textAlign: 'center' }}>
        <h1 className="animate-spring" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', marginBottom: 'var(--space-4)', letterSpacing: '-0.02em' }}>
          Información del Evento
        </h1>
        <p className="animate-spring" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Descubre cómo llegar, revisa los horarios oficiales y resuelve todas tus dudas antes de asistir al mayor torneo del año.
        </p>
      </section>

      {/* UBICACION */}
      <section className="container animate-spring" style={{ padding: 'var(--space-8) var(--space-4)' }}>
        <div className="card" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', padding: 'var(--space-8)' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--poke-navy)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>Cómo Llegar</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
              El evento se celebrará en el emblemático <strong>Merca Vell de Mollet del Vallès</strong>. Un recinto histórico totalmente reformado, climatizado y con capacidad para acoger a cientos de entrenadores.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', color: 'var(--poke-navy)', fontWeight: 600 }}>
              <li>📍 Plaça Prat de la Riba, 6, 08100 Mollet del Vallès, Barcelona</li>
              <li>🚆 A 10 min de la estación de Renfe (Mollet-Sant Fost)</li>
              <li>🚗 Parking público gratuito a escasos metros</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            [Mapa Interactivo de Google Maps iría aquí]
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
        <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <details style={{ padding: 'var(--space-4)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'all 200ms ease' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--poke-navy)', outline: 'none' }}>¿Cuáles son los horarios de apertura y cierre?</summary>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>El registro (Check-in) para el Main Event comienza el Sábado 5 a las 08:30 AM. La primera ronda comenzará puntualmente a las 09:30 AM. El recinto cerrará sus puertas alrededor de las 21:00 PM ambos días.</p>
            </details>
            <details style={{ padding: 'var(--space-4)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'all 200ms ease' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--poke-navy)', outline: 'none' }}>¿Puedo comprar comida en el recinto?</summary>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Sí, contaremos con servicio de bar, food trucks y zonas de descanso en el exterior del Merca Vell para recargar energías entre rondas.</p>
            </details>
            <details style={{ padding: 'var(--space-4)', background: 'rgba(227, 53, 13, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(227, 53, 13, 0.2)', cursor: 'pointer', transition: 'all 200ms ease' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--poke-red)', outline: 'none' }}>¿Se pueden devolver las entradas si no puedo ir?</summary>
              <div style={{ marginTop: 'var(--space-3)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                <p><strong>No.</strong> Como estipula la ley, este evento cuenta con aforo y fecha fija, por lo que no se admiten devoluciones bajo ninguna circunstancia. Puedes solicitar un cambio de titularidad hasta 72h antes.</p>
                <p style={{ marginTop: '1rem' }}><a href={`/${lang}/politica-devolucion`} style={{ color: 'var(--poke-red)', fontWeight: 700, textDecoration: 'underline' }}>Política de Devoluciones Completa</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="container" style={{ padding: 'var(--space-8) var(--space-4) var(--space-8)' }}>
        <div className="card" style={{ background: 'var(--poke-navy)', color: 'white', padding: 'clamp(3rem, 5vw, 5rem)', textAlign: 'center', maxWidth: '1000px', margin: '0 auto', border: 'none', boxShadow: 'var(--shadow-hover)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 'var(--space-4)', color: 'white' }}>¿Tienes Dudas?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-8)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta técnica o duda sobre el evento.</p>
          <a href="mailto:info@ugzevents.com" className="btn-official btn-yellow">Contactar Soporte</a>
        </div>
      </section>

    </div>
  )
}

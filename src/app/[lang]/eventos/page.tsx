import { getDictionary } from '../../../dictionaries'

export default async function Eventos(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  return (
    <div className="container">
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{dict.nav.events}</h1>
      <p style={{ opacity: 0.8, marginBottom: '3rem' }}>Descubre todos los torneos y ligas oficiales.</p>
      
      <div className="grid grid-cols-2" style={{ display: 'grid', gap: '2rem' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '120px', height: '120px', background: 'var(--primary)', borderRadius: '8px', opacity: 0.6, flexShrink: 0 }}></div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Liga Catalana TCG - Jornada {i}</h3>
              <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Girona | Fecha pendiente</p>
              <a href="https://weezevent.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Inscribirse</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

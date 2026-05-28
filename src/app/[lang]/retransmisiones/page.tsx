import { getDictionary } from '../../../dictionaries'

export default async function Retransmisiones(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  // Simulating different stream states
  const streams = [
    { id: 1, name: "Universe TCG Principal", team: "universe", isLive: true, platform: "Twitch", pov: "Mesa 1 (Top Cut)" },
    { id: 2, name: "Dani (Caster Z2)", team: "z2_team", isLive: true, platform: "YouTube", pov: "Caster Desk" },
    { id: 3, name: "Z2 POV Jugador", team: "z2_team", isLive: false, platform: "Twitch", pov: "Mesa 5" },
    { id: 4, name: "Z2 Entrevistas", team: "z2_team", isLive: false, platform: "Twitch", pov: "Zona Cardshow" },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <section style={{ background: 'var(--poke-navy)', color: 'white', padding: '4rem 2rem', borderBottom: '6px solid var(--poke-yellow)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'white', marginBottom: '1rem' }}>
            {dict.broadcasts?.title || "RETRANSMISIONES EN DIRECTO"}
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 600, maxWidth: '800px', opacity: 0.9 }}>
            Sigue la acción del torneo desde múltiples perspectivas (Multi-POV). Conéctate al stream principal de Universe TCG o sigue las partidas y comentarios del Equipo Z2.
          </p>
        </div>
      </section>

      {/* Grid de Streams */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="grid grid-cols-2">
          {streams.map((stream) => (
            <div key={stream.id} className="card" style={{ padding: 0, overflow: 'hidden', border: '3px solid var(--poke-navy)', background: 'white' }}>
              
              {/* Thumbnail / Video Placeholder */}
              <div style={{ position: 'relative', height: '250px', background: stream.isLive ? 'var(--poke-blue)' : '#e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Live Badge */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: stream.isLive ? 'var(--poke-red)' : '#6b7280', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', boxShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
                  {stream.isLive ? (dict.broadcasts?.live || "LIVE") : (dict.broadcasts?.offline || "OFFLINE")}
                </div>

                <div style={{ width: '80px', height: '80px', background: stream.isLive ? 'white' : '#9ca3af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                  <span style={{ fontSize: '2.5rem', color: stream.isLive ? 'var(--poke-blue)' : 'white', marginLeft: '6px' }}>▶</span>
                </div>
              </div>

              {/* Info y Botón */}
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--poke-navy)', margin: 0 }}>{stream.name}</h3>
                  <span style={{ background: 'var(--bg-primary)', border: '2px solid var(--text-secondary)', color: 'var(--text-secondary)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 800 }}>
                    {dict.broadcasts?.[stream.team as keyof typeof dict.broadcasts] || stream.team}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--poke-navy)' }}>Punto de vista (POV):</span> {stream.pov} <br/>
                  <span style={{ color: 'var(--poke-navy)' }}>Plataforma:</span> {stream.platform}
                </p>
                
                <a href="#" className={`btn ${stream.isLive ? 'btn-yellow' : 'btn-blue'}`} style={{ width: '100%', opacity: stream.isLive ? 1 : 0.7 }}>
                  {stream.isLive ? "UNIRSE AL DIRECTO" : "VER CANAL"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

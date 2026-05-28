import { getDictionary } from '../../../../dictionaries';

export default async function MolletTcgFest(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  return (
    <div style={{ backgroundColor: '#f1f5f9', paddingBottom: '4rem' }}>
      {/* Hero Banner Masivo */}
      <section style={{ 
        height: '70vh', 
        minHeight: '600px',
        backgroundImage: "url('https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '4rem 2rem',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a215a 0%, transparent 80%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
          <div style={{ background: '#E3350D', display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '999px', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.05em', fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
            EL MAYOR EVENTO DE CATALUÑA
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', fontWeight: 900, textTransform: 'uppercase', textShadow: '2px 2px 0px #000', margin: 0, lineHeight: 1 }}>
            Mollet TCG Fest
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 700, marginTop: '1rem', color: '#FFCB05' }}>
            5 y 6 de Septiembre, 2026 | Merca Vell
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '0 2rem', marginTop: '-3rem', position: 'relative', zIndex: 2 }}>
        
        {/* Info Técnica Destacada (Teaser) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          {[
            { title: "Aforo 300+", desc: "Jugadores" },
            { title: "Z2 Team", desc: "Hub de Stream" },
            { title: "Red Privada", desc: "Soporte 300 equipos" },
            { title: "Merca Vell", desc: "Recinto Premium" }
          ].map(stat => (
            <div key={stat.title} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', borderBottom: '4px solid #3161A5' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a215a', margin: 0 }}>{stat.title}</h3>
              <p style={{ margin: 0, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', fontSize: '0.9rem' }}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Entradas */}
        <section id="entradas" style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Entradas y Pases
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Main Event */}
            <div style={{ background: 'white', padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)', borderRadius: '16px', border: '4px solid #E3350D', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#E3350D', color: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 800, alignSelf: 'center', marginBottom: '1rem', textTransform: 'uppercase' }}>Más Vendido</div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', margin: 0 }}>Main Event</h3>
              <p style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 900, margin: '1rem 0', color: '#E3350D' }}>30€</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '3rem', gap: '1rem', display: 'flex', flexDirection: 'column', fontWeight: 600, color: '#334155' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#E3350D' }}>✓</span> Acceso Sábado 5 y Domingo 6</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#E3350D' }}>✓</span> Plaza garantizada en el Torneo Oficial</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#E3350D' }}>✓</span> Welcome Pack Exclusivo</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#E3350D' }}>✓</span> Derecho a optar al Prizepool</li>
              </ul>
              <a href="#" style={{ marginTop: 'auto', display: 'block', background: '#E3350D', color: 'white', padding: '1.2rem', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', textTransform: 'uppercase', fontSize: '1.2rem' }}>COMPRAR AHORA</a>
            </div>

            {/* Side Events */}
            <div style={{ background: 'white', padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)', borderRadius: '16px', border: '4px solid #3161A5', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'transparent', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 800, alignSelf: 'center', marginBottom: '1rem', textTransform: 'uppercase', color: 'transparent' }}>Spacer</div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', margin: 0 }}>Side Events</h3>
              <p style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 900, margin: '1rem 0', color: '#3161A5' }}>15€</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '3rem', gap: '1rem', display: 'flex', flexDirection: 'column', fontWeight: 600, color: '#334155' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#3161A5' }}>✓</span> Acceso 1 Día (Sábado o Domingo)</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#3161A5' }}>✓</span> Participación en Ligas Menores</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#3161A5' }}>✓</span> Entra en Sorteos de material</li>
              </ul>
              <a href="#" style={{ marginTop: 'auto', display: 'block', background: '#3161A5', color: 'white', padding: '1.2rem', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', textTransform: 'uppercase', fontSize: '1.2rem' }}>COMPRAR AHORA</a>
            </div>

          </div>
        </section>

        {/* Despliegue Técnico y Experiencia (Nueva sección hiper expandida) */}
        <section style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)', background: '#0a215a', color: 'white', padding: 'clamp(2rem, 6vw, 4rem)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
              Infraestructura Nivel Premier
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📡 Red de Alta Capacidad
                </h3>
                <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
                  El Merca Vell ha sido equipado con una conexión de internet dedicada y enrutadores industriales configurados específicamente para <strong>soportar más de 300 dispositivos de forma simultánea</strong> sin caídas de red, garantizando partidas fluidas de Pokémon GO y gestión de emparejamientos TCG Live al segundo.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🎥 Z2 Team Stream Hub
                </h3>
                <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
                  La retransmisión es el corazón de este evento. Universe TCG se asocia con el equipo de realización <strong>Z2 Team</strong> para ofrecer un HUB de retransmisión multipunto. Habrá PCs y periféricos dedicados para controlar los diferentes "Point of View" (POV) de las mesas de campeonato en tiempo real.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📺 Experiencia Espectador
                </h3>
                <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
                  Para quienes acudan a animar, hemos instalado una <strong>Pantalla Gigante</strong> central visible desde las zonas de descanso y gradas. Va acompañada de un <strong>equipo de sonido profesional</strong> para comentar las finales, asegurando que todos los asistentes vibren con el desenlace.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🪑 Recinto Preparado
                </h3>
                <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
                  Merca Vell nos ofrece una nave totalmente diáfana, climatizada, y configurada con mesas reglamentarias y sillas ergonómicas para acoger holgadamente a más de <strong>300 asistentes</strong>, manteniendo pasillos amplios según normativa y zonas de comercio.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ del Evento */}
        <section style={{ background: 'white', padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '24px', border: '4px solid #e2e8f0' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
            Preguntas Frecuentes del Mollet Fest
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a215a' }}>¿Cuáles son los horarios de apertura y cierre?</summary>
              <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>
                El registro (Check-in) para el Main Event comienza el Sábado 5 a las 08:30 AM. La primera ronda comenzará puntualmente a las 09:30 AM. El recinto cerrará sus puertas alrededor de las 21:00 PM ambos días, sujeto a la duración de las rondas suizas.
              </p>
            </details>

            <details style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a215a' }}>¿Dónde se realiza el evento y cómo llegar?</summary>
              <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>
                En el <strong>Merca Vell de Mollet del Vallès</strong>. Se encuentra a tan solo 10 minutos caminando de la estación de cercanías (Renfe) Mollet-Sant Fost. Hay zonas de aparcamiento gratuito en las inmediaciones del recinto.
              </p>
            </details>

            <details style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a215a' }}>¿Hay comida en el recinto?</summary>
              <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>
                El Merca Vell está en una zona céntrica, rodeado de opciones de restauración, supermercados y locales de comida rápida a menos de 5 minutos a pie. Haremos una pausa para comer de 60 minutos entre las rondas del mediodía.
              </p>
            </details>

            <details style={{ padding: '1.5rem', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#991b1b' }}>¿Se pueden devolver las entradas si no puedo ir?</summary>
              <div style={{ marginTop: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                <p>
                  <strong>No.</strong> Como estipula la ley, este evento cuenta con aforo y fecha fija, por lo que no se admiten devoluciones bajo ninguna circunstancia. Si no puedes asistir, podrás solicitar un cambio de titularidad hasta 72 horas antes del evento.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Revisa detalladamente nuestra <a href={`/${lang}/politica-devolucion`} style={{ color: '#dc2626', fontWeight: 800, textDecoration: 'underline' }}>Política de Devoluciones Completa</a>.
                </p>
              </div>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
}

import HomePageHeroBlade from '@/components/HomePageHeroBlade';
import DarkBackgroundBlade from '@/components/DarkBackgroundBlade';
import EventResults from '@/components/EventResults';
import NewsCarousel from '@/components/NewsCarousel';
import SmallBannerPromo from '@/components/SmallBannerPromo';
import { getDictionary } from '../../dictionaries';

export default async function Home(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  const heroData = {
    title: "MOLLET TCG FEST 2026",
    date: "5 y 6 de Septiembre | Merca Vell, Mollet",
    buttons: [
      { text: "Comprar Entradas", url: `/${lang}/#entradas` }
    ]
  };

  const darkBladeData = {
    title: "El Evento del Año en Cataluña",
    copyHtml: "<p>Aforo para más de 300 personas, despliegue de retransmisión multipunto por el Z2 Team y torneos oficiales. ¡No te quedes sin tu plaza!</p>",
    buttons: [
      { text: "Ver Detalles del Evento", url: `/${lang}/#evento` }
    ]
  };

  const resultsData = {
    title: "Próximos Torneos",
    pillars: [
      { id: "tcg", label: "JCC", color: "blue", title: "Mollet TCG Fest - Main Event", img: "https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/#entradas` },
      { id: "vg", label: "VJ", color: "red", title: "Mollet VGC - Torneo Oficial", img: "https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/#entradas` },
      { id: "go", label: "GO", color: "green", title: "Mollet GO - Side Events", img: "https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/#entradas` }
    ]
  };

  const promoData = {
    title: "Asegura tu entrada (Aforo Limitado)",
    buttons: [
      { text: "Comprar Ticket Main Event", url: `/${lang}/#entradas` },
      { text: "Ver Políticas de Acceso", url: `/${lang}/politica-devolucion` }
    ]
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', paddingBottom: '4rem' }}>
      
      <div id="hero"><HomePageHeroBlade {...heroData} /></div>
      
      <div id="evento"><DarkBackgroundBlade {...darkBladeData} /></div>

      {/* NUEVA SECCIÓN: VALORES */}
      <section id="valores" className="section-diagonal" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--poke-navy)', marginBottom: '3rem' }}>Nuestros Valores</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 style={{ color: 'var(--poke-red)', fontSize: '1.5rem', marginBottom: '1rem' }}>COMUNIDAD</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Fomentamos un ambiente de respeto, diversión e inclusión donde todos los entrenadores tienen cabida.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--poke-blue)', fontSize: '1.5rem', marginBottom: '1rem' }}>COMPETICIÓN SANA</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Jueces oficiales y un entorno profesional que garantiza el juego limpio y el máximo nivel competitivo.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--poke-yellow)', fontSize: '1.5rem', marginBottom: '1rem' }}>TRANSPARENCIA</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Premios claros desde el primer día, reglas estrictas y total claridad en la organización.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Despliegue Técnico y Experiencia */}
      <section style={{ padding: '4rem 2rem', background: '#0a215a', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
            Infraestructura Nivel Premier
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem' }}>📡 Red de Alta Capacidad</h3>
              <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>Merca Vell está equipado con conexión dedicada soportando <strong>más de 300 dispositivos</strong> simultáneos sin caídas de red.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem' }}>🎥 Z2 Team Stream Hub</h3>
              <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>Retransmisión profesional multipunto con <strong>Z2 Team</strong> para controlar los "Point of View" en tiempo real.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem' }}>📺 Experiencia Espectador</h3>
              <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}><strong>Pantalla Gigante</strong> central y equipo de sonido profesional para comentar las finales y que todos vibren con el desenlace.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFCB05', marginBottom: '1rem' }}>🪑 Recinto Preparado</h3>
              <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>Nave totalmente diáfana y climatizada con mesas reglamentarias y sillas ergonómicas para acoger holgadamente a más de <strong>300 asistentes</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRADAS */}
      <section id="entradas" className="container" style={{ padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
          Entradas y Pases
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
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

      <div id="competicion"><EventResults {...resultsData} /></div>
      
      <NewsCarousel lang={lang} />
      
      {/* FAQ */}
      <section id="faq" className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ background: 'white', padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '24px', border: '4px solid #e2e8f0' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, color: '#0a215a', textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a215a' }}>¿Cuáles son los horarios de apertura y cierre?</summary>
              <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>El registro (Check-in) para el Main Event comienza el Sábado 5 a las 08:30 AM. La primera ronda comenzará puntualmente a las 09:30 AM. El recinto cerrará sus puertas alrededor de las 21:00 PM ambos días.</p>
            </details>
            <details style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a215a' }}>¿Dónde se realiza el evento y cómo llegar?</summary>
              <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>En el <strong>Merca Vell de Mollet del Vallès</strong>. A tan solo 10 minutos caminando de la estación de cercanías (Renfe) Mollet-Sant Fost. Hay zonas de aparcamiento gratuito en las inmediaciones.</p>
            </details>
            <details style={{ padding: '1.5rem', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca', cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: '#991b1b' }}>¿Se pueden devolver las entradas si no puedo ir?</summary>
              <div style={{ marginTop: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                <p><strong>No.</strong> Como estipula la ley, este evento cuenta con aforo y fecha fija, por lo que no se admiten devoluciones bajo ninguna circunstancia. Puedes solicitar un cambio de titularidad hasta 72h antes.</p>
                <p style={{ marginTop: '1rem' }}><a href={`/${lang}/politica-devolucion`} style={{ color: '#dc2626', fontWeight: 800, textDecoration: 'underline' }}>Política de Devoluciones Completa</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="container" style={{ padding: '2rem 2rem 6rem' }}>
        <div style={{ background: '#0a215a', color: 'white', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>¿Tienes Dudas?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cbd5e1' }}>Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta técnica o duda sobre el evento.</p>
          <a href="mailto:info@ugzevents.com" className="btn-official btn-yellow" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>Contactar Soporte</a>
        </div>
      </section>

      <SmallBannerPromo {...promoData} />
    </div>
  )
}

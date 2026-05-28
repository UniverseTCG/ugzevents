import HomePageHeroBlade from '@/components/HomePageHeroBlade';
import DarkBackgroundBlade from '@/components/DarkBackgroundBlade';
import EventResults from '../../components/EventResults';
import NewsCarousel from '../../components/NewsCarousel';
import SmallBannerPromo from '../../components/SmallBannerPromo';
import NewsTicker from '../../components/NewsTicker';
import SocialWall from '../../components/SocialWall';
import { getDictionary } from '../../dictionaries';

export default async function Home(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';

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
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <NewsTicker />
      
      {/* HERO SECTION */}
      <section className="bg-halftone-pattern clip-diagonal" style={{ backgroundColor: 'var(--poke-navy)', position: 'relative', overflow: 'hidden', paddingBottom: '8vw' }}>
        
        {/* Background glow effects */}
        <div id="hero"><HomePageHeroBlade {...heroData} /></div>
        <div id="evento"><DarkBackgroundBlade {...darkBladeData} /></div>
      </section>

      {/* VALORES SECTION (Now overlapping the diagonal Hero) */}
      <section id="valores" className="container" style={{ padding: 'var(--space-8) var(--space-4)', position: 'relative', zIndex: 10, marginTop: '-6vw' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', textAlign: 'center', marginBottom: 'var(--space-8)' }}>Nuestros Valores</h2>
          <div className="grid grid-cols-3">
            <div className="glass-card" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--poke-red)', fontSize: '1.25rem', marginBottom: 'var(--space-3)', fontWeight: 800 }}>COMUNIDAD</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Fomentamos un ambiente de respeto, diversión e inclusión donde todos los entrenadores tienen cabida.</p>
            </div>
            <div className="glass-card" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--poke-blue)', fontSize: '1.25rem', marginBottom: 'var(--space-3)', fontWeight: 800 }}>COMPETICIÓN SANA</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Jueces oficiales y un entorno profesional que garantiza el juego limpio y el máximo nivel competitivo.</p>
            </div>
            <div className="glass-card" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--poke-yellow)', fontSize: '1.25rem', marginBottom: 'var(--space-3)', fontWeight: 800 }}>TRANSPARENCIA</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Premios claros desde el primer día, reglas estrictas y total claridad en la organización.</p>
            </div>
          </div>
      </section>

      {/* Despliegue Técnico y Experiencia */}
      <section style={{ padding: '6rem 2rem 4rem', background: 'var(--championship-bg)', color: 'var(--poke-navy)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center', color: 'var(--poke-navy)' }}>
            Infraestructura Nivel Premier
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--poke-red)', marginBottom: '1rem', fontWeight: 800 }}>📡 Red de Alta Capacidad</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>Merca Vell está equipado con conexión dedicada soportando <strong>más de 300 dispositivos</strong> simultáneos sin caídas de red.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--poke-red)', marginBottom: '1rem', fontWeight: 800 }}>🎥 Z2 Team Stream Hub</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>Retransmisión profesional multipunto con <strong>Z2 Team</strong> para controlar los &quot;Point of View&quot; en tiempo real.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--poke-red)', marginBottom: '1rem', fontWeight: 800 }}>📺 Experiencia Espectador</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}><strong>Pantalla Gigante</strong> central y equipo de sonido profesional para comentar las finales y que todos vibren con el desenlace.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--poke-red)', marginBottom: '1rem', fontWeight: 800 }}>🪑 Recinto Preparado</h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>Nave totalmente diáfana y climatizada con mesas reglamentarias y sillas ergonómicas para acoger holgadamente a más de <strong>300 asistentes</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="competicion"><EventResults {...resultsData} /></div>
      
      <SocialWall />

      <NewsCarousel lang={lang} />
      
      <SmallBannerPromo {...promoData} />
    </div>
  )
}

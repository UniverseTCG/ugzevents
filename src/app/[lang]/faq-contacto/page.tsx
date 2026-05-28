export default function FaqContacto() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0a215a', marginBottom: '2rem', textTransform: 'uppercase', borderBottom: '4px solid #3161A5', paddingBottom: '1rem' }}>
          Preguntas Frecuentes y Contacto
        </h1>

        <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#0a215a', marginBottom: '1rem' }}>¿Qué es Universe TCG?</h2>
            <p>
              Universe TCG es la plataforma centralizada para la organización, gestión y disfrute de los eventos competitivos y casuales de Pokémon Trading Card Game, Video Game Championships y Pokémon GO en el ámbito de la Liga Catalana y torneos nacionales.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#0a215a', marginBottom: '1rem' }}>¿Necesito un Player ID para participar?</h2>
            <p>
              Sí, todos los jugadores que deseen participar en torneos oficiales (Main Events, League Cups, League Challenges) deben tener un Player ID válido asignado por Play! Pokémon y presentarlo en el momento del registro o compra de la entrada.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#0a215a', marginBottom: '1rem' }}>¿Qué necesito llevar a un torneo?</h2>
            <p>
              Para los eventos TCG: tu baraja legal para el formato en curso, contadores de daño, moneda o dado válido, marcadores de condición (Veneno/Quemadura) y marcador VSTAR/GX si corresponde. Para VGC/GO: tu consola/móvil con batería suficiente y el juego debidamente actualizado con el equipo registrado.
            </p>
          </section>

          <section style={{ borderTop: '2px solid #e2e8f0', paddingTop: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#E3350D', marginBottom: '1rem' }}>Contacto</h2>
            <p>
              Si tienes alguna incidencia con tu entrada, el registro o necesitas realizar un traspaso autorizado, por favor escríbenos a:
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a215a' }}>soporte@universetcg.com</p>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              *Nuestro tiempo de respuesta habitual es de 24 a 48 horas laborables. Para urgencias durante el fin de semana del evento, acude a la mesa de organización en el recinto.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

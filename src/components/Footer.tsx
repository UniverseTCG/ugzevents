export default function Footer({ lang }: { lang: string }) {
  return (
    <footer style={{ backgroundColor: '#0a215a', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        
        {/* Email Signup Area */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', color: 'white' }}>
            ¡REGÍSTRATE PARA RECIBIR CORREOS ELECTRÓNICOS DE UNIVERSE TCG!
          </h2>
          <button style={{ backgroundColor: '#E3350D', color: 'white', border: '1px solid #E3350D', padding: '0.5rem 2rem', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
            REGÍSTRATE
          </button>
        </div>

        {/* Logos Area */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          {/* Faked logo text for Universe TCG / Pokemon Company feel */}
          <h2 style={{ fontFamily: 'var(--font-display)', margin: 0 }}>Universe TCG Company</h2>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#E3350D', borderRadius: '8px', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800 }}>UGZ</div>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Instagram', 'Twitch', 'Twitter', 'YouTube'].map(social => (
            <div key={social} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', cursor: 'pointer', fontSize: '0.8rem' }}>
              {social[0]}
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', width: '100%' }}>
          <a href="#" style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Atención al cliente</a>
          <a href="#" style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Condiciones de uso</a>
          <a href="#" style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Aviso de privacidad</a>
          <a href={`/${lang}/politica-devolucion`} style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>Política de Devolución</a>
          <a href={`/${lang}/faq-contacto`} style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Preguntas Frecuentes</a>
        </div>

        <p style={{ fontSize: '0.8rem', opacity: 0.7, textAlign: 'center' }}>
          ©2026 Universe TCG. Operador Autorizado Oficial de Torneos.<br/>
          *Basado en los lineamientos oficiales de Play! Pokémon.*
        </p>
      </div>
    </footer>
  )
}

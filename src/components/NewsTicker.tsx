export default function NewsTicker() {
  const alerts = [
    "🏆 ¡BIENVENIDOS AL MOLLET TCG FEST 2026! 🏆",
    "🔴 ÚLTIMAS 50 ENTRADAS PARA EL MAIN EVENT",
    "📺 STREAMING OFICIAL A CARGO DE Z2 TEAM",
    "🎁 SORTEO DE BOOSTER BOX PARA ASISTENTES",
    "⚔️ INSCRIPCIONES SIDE EVENTS ABIERTAS"
  ];

  // We duplicate the alerts a few times so the marquee doesn't have blank spaces
  const repeatedAlerts = [...alerts, ...alerts, ...alerts];

  return (
    <div className="news-ticker-container">
      <div className="news-ticker-content">
        {repeatedAlerts.map((alert, index) => (
          <div key={index} className="news-ticker-item">
            {alert}
            <span style={{ margin: '0 2rem', color: 'var(--poke-yellow)' }}>•</span>
          </div>
        ))}
      </div>
    </div>
  )
}

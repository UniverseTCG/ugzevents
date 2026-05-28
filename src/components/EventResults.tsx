'use client';
import { useState } from 'react';

export default function EventResults({
  title,
  pillars
}: {
  title: string,
  pillars: { id: string, label: string, color: string, title: string, img: string, link: string }[]
}) {
  const [activePillar, setActivePillar] = useState(pillars[0].id);

  const getPillarColor = (colorName: string) => {
    switch (colorName) {
      case 'red': return '#E3350D';
      case 'blue': return '#3161A5';
      case 'green': return '#4DAD5B';
      default: return '#3161A5';
    }
  };

  const activeData = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <section style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#f1f5f9',
      backgroundImage: 'radial-gradient(#3161A5 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundBlendMode: 'multiply'
    }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          textAlign: 'center', 
          marginBottom: '2rem', 
          color: '#0a215a',
          letterSpacing: '0.05em' // Adjusted tracking like Image 3
        }}>
          {title} {/* This will be "PRÓXIMOS EVENTOS" */}
        </h2>

        {/* Pillar Switcher exact match to Image 3 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {pillars.map(p => {
            const isActive = activePillar === p.id;
            return (
              <button 
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                style={{
                  background: isActive ? getPillarColor(p.color) : '#fff',
                  color: isActive ? '#fff' : '#0a215a',
                  border: `3px solid ${getPillarColor(p.color)}`,
                  padding: 'clamp(0.5rem, 2vw, 0.5rem) clamp(1.5rem, 4vw, 3rem)', // Fluid padding
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  fontWeight: 800,
                  borderRadius: '999px', // Pill shape
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: 'none' // They don't have the brutalist shadow in the original pill
                }}
              >
                {p.label}
              </button>
            )
          })}
        </div>

        {/* Card exact match to Image 3 */}
        <div style={{ 
          background: '#fff', 
          borderRadius: '16px', 
          border: `4px solid ${getPillarColor(activeData.color)}`, 
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)' // Soft shadow, not brutalist
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: '#0a215a', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              {activeData.title}
            </h3>
            
            <a href={activeData.link} style={{ display: 'block', width: '100%', maxWidth: '800px', overflow: 'hidden', borderRadius: '12px', border: `3px solid ${getPillarColor(activeData.color)}` }}>
              {/* If no actual image from Pokemon, we render a placeholder similar to their graphics */}
              <div style={{ width: '100%', height: 'clamp(200px, 40vw, 400px)', backgroundImage: `url('${activeData.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '2rem' }}>
                <div style={{ background: 'white', color: '#0a215a', padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 3rem)', borderRadius: '999px', fontWeight: 800, textTransform: 'uppercase', border: '3px solid #0a215a', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', transform: 'translateY(50%)', marginBottom: '-1rem' }}>
                  COMPRAR ENTRADAS AHORA
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

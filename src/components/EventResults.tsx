'use client';
import { useState } from 'react';

export default function EventResults({
  title,
  pillars,
  buyLabel
}: {
  title: string,
  pillars: { id: string, label: string, color: string, title: string, img: string, link: string }[],
  buyLabel: string
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
          fontWeight: 900, 
          textTransform: 'uppercase', 
          textAlign: 'center', 
          marginBottom: 'var(--space-8)', 
          color: 'var(--poke-navy)',
          letterSpacing: '-0.02em'
        }}>
          {title}
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
                  background: isActive ? getPillarColor(p.color) : 'transparent',
                  color: isActive ? '#fff' : 'var(--poke-navy)',
                  border: `1px solid ${isActive ? 'transparent' : 'rgba(0,0,0,0.1)'}`,
                  padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                  transition: 'all 200ms var(--spring-easing)',
                  boxShadow: isActive ? 'var(--shadow-hover)' : 'none',
                  transform: isActive ? 'translateY(-1px)' : 'none'
                }}
              >
                {p.label}
              </button>
            )
          })}
        </div>

        {/* Card exact match to Image 3 */}
        <div className="card animate-spring" style={{ 
          borderTop: `4px solid ${getPillarColor(activeData.color)}`, 
          padding: 'var(--space-8)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: 'var(--poke-navy)', marginBottom: 'var(--space-6)', textTransform: 'uppercase' }}>
              {activeData.title}
            </h3>
            
            <a href={activeData.link} style={{ display: 'block', width: '100%', maxWidth: '800px', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: `1px solid rgba(0,0,0,0.1)`, transition: 'all 250ms var(--spring-easing)' }} className="group">
              <div style={{ width: '100%', height: 'clamp(200px, 40vw, 300px)', backgroundImage: `url('${activeData.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 'var(--space-6)' }}>
                <div className="btn-official" style={{ background: 'white', color: 'var(--poke-navy)', transform: 'translateY(50%)', marginBottom: '-1rem', border: '1px solid rgba(0,0,0,0.1)' }}>
                  {buyLabel}
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

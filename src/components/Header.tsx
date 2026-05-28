'use client';
import { useState } from 'react';

export default function Header({ lang, dict }: { lang: string, dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "EL EVENTO", href: `/${lang}/#evento` },
    { label: "VALORES", href: `/${lang}/#valores` },
    { label: "ENTRADAS", href: `/${lang}/#entradas` },
    { label: "FAQ", href: `/${lang}/#faq` },
    { label: "CONTACTO", href: `/${lang}/#contacto` },
  ];

  return (
    <>
      <header>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 200 }}>
          <span style={{ color: 'var(--primary)' }}>U</span>
          <span style={{ color: 'var(--foreground)' }}>G</span>
          <span style={{ color: 'var(--secondary)' }}>Z</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Desktop Lang Switcher */}
        <div className="desktop-lang-switcher" style={{ display: 'flex', gap: '0.5rem', fontWeight: 600 }}>
          <a href="/ca" style={{ opacity: lang === 'ca' ? 1 : 0.5 }}>CA</a> | 
          <a href="/es" style={{ opacity: lang === 'es' ? 1 : 0.5 }}>ES</a> | 
          <a href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5 }}>EN</a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontSize: '1.5rem', color: '#0a215a', fontWeight: 800, textTransform: 'uppercase', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', fontSize: '1.2rem', fontWeight: 800, justifyContent: 'center' }}>
              <a href="/ca" style={{ opacity: lang === 'ca' ? 1 : 0.5, color: '#0a215a' }}>CA</a>
              <a href="/es" style={{ opacity: lang === 'es' ? 1 : 0.5, color: '#0a215a' }}>ES</a>
              <a href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5, color: '#0a215a' }}>EN</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

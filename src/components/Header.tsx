'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ lang }: { lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: `/${lang}` },
    { label: 'Entradas', href: `/${lang}/entradas` },
    { label: 'Noticias', href: `/${lang}/noticias` },
    { label: 'Directo (Z2 Team)', href: `/${lang}/live` },
    { label: 'Info & FAQ', href: `/${lang}/info` },
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
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Desktop Lang Switcher */}
        <div className="desktop-lang-switcher" style={{ display: 'flex', gap: '0.5rem', fontWeight: 600 }}>
          <Link href="/ca" style={{ opacity: lang === 'ca' ? 1 : 0.5 }}>CA</Link> | 
          <Link href="/es" style={{ opacity: lang === 'es' ? 1 : 0.5 }}>ES</Link> | 
          <Link href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5 }}>EN</Link>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '1.2rem', justifyContent: 'center' }}>
              <Link href="/ca" style={{ opacity: lang === 'ca' ? 1 : 0.5 }}>CA</Link>
              <Link href="/es" style={{ opacity: lang === 'es' ? 1 : 0.5 }}>ES</Link>
              <Link href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5 }}>EN</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

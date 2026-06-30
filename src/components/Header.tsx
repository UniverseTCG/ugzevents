'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Nav = { home:string; tickets:string; news:string; live:string; info:string; menu:string };
export default function Header({ lang, dictionary }: { lang:string; dictionary:Nav }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [[dictionary.home,`/${lang}`],[dictionary.tickets,`/${lang}/entradas`],[dictionary.news,`/${lang}/noticias`],[dictionary.live,`/${lang}/live`],[dictionary.info,`/${lang}/info`]];
  const languageHref = (locale: string) => pathname.replace(/^\/(ca|es|en)(?=\/|$)/, `/${locale}`);
  const languages = <>{(['ca','es','en'] as const).map((locale,index)=><span key={locale}>{index>0&&' | '}<Link href={languageHref(locale)} style={{opacity:lang===locale?1:.5}}>{locale.toUpperCase()}</Link></span>)}</>;
  return <><header>
    <div className="logo" style={{fontSize:'1.5rem',fontWeight:800,fontFamily:'var(--font-display)',display:'flex',alignItems:'center',gap:'.5rem',zIndex:200}}><span style={{color:'var(--primary)'}}>U</span><span>G</span><span style={{color:'var(--secondary)'}}>Z</span></div>
    <nav className="desktop-nav">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <button className="mobile-menu-btn" onClick={()=>setOpen(!open)} aria-label={dictionary.menu}>{open?'✕':'☰'}</button>
    <div className="desktop-lang-switcher" style={{display:'flex',gap:'.5rem',fontWeight:600}}>{languages}</div>
  </header>{open&&<div className="mobile-nav-overlay" onClick={()=>setOpen(false)}><div className="mobile-nav-content" onClick={e=>e.stopPropagation()}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<div style={{marginTop:'1rem',textAlign:'center'}}>{languages}</div></div></div>}</>;
}

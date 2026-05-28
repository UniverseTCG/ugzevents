import { Metadata } from 'next';
import Link from 'next/link';
import { newsData } from '../../../data/news';

export const metadata: Metadata = {
  title: 'Noticias - Mollet TCG Fest',
  description: 'Mantente al día con las últimas novedades, sorteos y anuncios del Mollet TCG Fest.'
};

export default async function NoticiasIndexPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: 'var(--space-16)', paddingTop: 'var(--space-12)' }}>
      <section className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
        <h1 className="animate-spring" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--poke-navy)', textTransform: 'uppercase', marginBottom: 'var(--space-8)', letterSpacing: '-0.02em', textAlign: 'center' }}>
          Últimas <span style={{ color: 'var(--poke-red)' }}>Noticias</span>
        </h1>
        
        <div className="grid grid-cols-2 animate-spring" style={{ maxWidth: '1000px', margin: '0 auto', gap: 'var(--space-8)' }}>
          {newsData.map(article => (
            <Link key={article.slug} href={`/${lang}/noticias/${article.slug}`} style={{ textDecoration: 'none' }}>
              <article className="glass-card clip-card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 200ms ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <span className="pill" style={{ background: 'var(--poke-yellow)', color: 'var(--poke-navy)' }}>{article.category}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--poke-navy)', marginBottom: 'var(--space-3)' }}>{article.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>{article.excerpt}</p>
                <div style={{ marginTop: 'var(--space-4)', color: 'var(--poke-red)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Leer más <span>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

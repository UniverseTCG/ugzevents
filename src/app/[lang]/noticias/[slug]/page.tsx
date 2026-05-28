import { getNewsBySlug, newsData } from '../../../../data/news';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getNewsBySlug(resolvedParams.slug);
  
  if (!article) return { title: 'Noticia no encontrada' };
  
  return {
    title: `${article.title} - Mollet TCG Fest`,
    description: article.excerpt
  };
}

// Generate static params for the blog since we have local data
export function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NoticiaDetailPage(props: { params: Promise<{ lang: string, slug: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const article = getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: 'var(--space-16)', minHeight: '100vh' }}>
      {/* Header diagonal */}
      <div className="bg-halftone-pattern clip-diagonal" style={{ padding: 'var(--space-12) var(--space-4) var(--space-16)', backgroundColor: 'var(--poke-navy)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href={`/${lang}/noticias`} style={{ color: 'var(--poke-yellow)', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: 'var(--space-6)' }}>
            ← Volver a Noticias
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <span className="pill" style={{ background: 'var(--poke-yellow)', color: 'var(--poke-navy)' }}>{article.category}</span>
            <span style={{ opacity: 0.8 }}>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <h1 className="animate-spring" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="container" style={{ padding: 'var(--space-8) var(--space-4)', marginTop: '-8vw', position: 'relative', zIndex: 10 }}>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--poke-navy)', fontWeight: 600, marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
            {article.excerpt}
          </p>
          <div style={{ width: '100%', height: '2px', background: 'var(--championship-bg)', marginBottom: 'var(--space-6)' }}></div>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {/* Si tuviéramos MDX, renderizaríamos aquí. Por ahora, un simple p. */}
            <p>{article.content}</p>
            <p style={{ marginTop: '1rem' }}>Sigue nuestras redes para no perderte ninguna actualización importante sobre el torneo.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

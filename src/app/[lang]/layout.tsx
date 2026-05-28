import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import Footer from "../../components/Footer";
import "../globals.css";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const baseUrl = "https://ugzevents.com";

  return {
    title: "UGZ - Universal Gaming Zone",
    description: "La lliga oficial d'esdeveniments TCG, VGC i més.",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'ca': `${baseUrl}/ca`,
        'es': `${baseUrl}/es`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: "UGZ - Universal Gaming Zone",
      description: "Esdeveniments Oficials TCG i VGC",
      url: `${baseUrl}/${lang}`,
      siteName: "UGZ Events",
      images: [
        {
          url: `${baseUrl}/assets/logo.png`,
          width: 800,
          height: 600,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Universal Gaming Zone",
              "url": "https://ugzevents.com",
              "logo": "https://ugzevents.com/assets/logo.png",
              "sameAs": [
                "https://madverse.es/"
              ]
            })
          }}
        />
      </head>
      <body>
        <header>
          <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--primary)' }}>U</span>
            <span style={{ color: 'var(--foreground)' }}>G</span>
            <span style={{ color: 'var(--secondary)' }}>Z</span>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
            <a href={`/${lang}/`}>{dict.nav.home}</a>
            <a href={`/${lang}/eventos`}>{dict.nav.events}</a>
            <a href={`/${lang}/clasificaciones`}>{dict.nav.leaderboards}</a>
            <a href={`/${lang}/retransmisiones`}>{dict.nav.broadcasts}</a>
            <a href={`/${lang}/eventos/mollet-tcg-fest`} style={{ color: 'var(--poke-yellow)' }}>MOLLET TCG FEST</a>
          </nav>
          <div className="lang-switcher" style={{ display: 'flex', gap: '0.5rem', fontWeight: 600 }}>
            <a href="/ca" style={{ opacity: lang === 'ca' ? 1 : 0.5 }}>CA</a> | 
            <a href="/es" style={{ opacity: lang === 'es' ? 1 : 0.5 }}>ES</a> | 
            <a href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5 }}>EN</a>
          </div>
        </header>
        <main>{props.children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}

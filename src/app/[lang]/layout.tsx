import type { Metadata, Viewport } from "next";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

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
        <Header lang={lang} />
        <main>{props.children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}

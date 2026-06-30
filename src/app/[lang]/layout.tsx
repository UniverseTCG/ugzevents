import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getDictionary, hasLocale, locales } from '../../dictionaries';
import '../globals.css';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const baseUrl = 'https://ugzevents.com';
  return {
    title: 'UGZ - Universal Gaming Zone', description: dict.meta.description,
    alternates: { canonical: `${baseUrl}/${lang}`, languages: { ca: `${baseUrl}/ca`, es: `${baseUrl}/es`, en: `${baseUrl}/en` } },
    openGraph: { title: 'UGZ - Universal Gaming Zone', description: dict.meta.og, url: `${baseUrl}/${lang}`, siteName: 'UGZ Events', images: [{ url: `${baseUrl}/assets/logo.png`, width: 800, height: 600 }], locale: lang, type: 'website' }
  };
}

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return <html lang={lang}><body><Header lang={lang} dictionary={dict.nav} /><main>{children}</main><Footer lang={lang} dictionary={dict.footer} /></body></html>;
}

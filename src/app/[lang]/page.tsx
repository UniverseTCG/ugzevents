import HomePageHeroBlade from '@/components/HomePageHeroBlade';
import DarkBackgroundBlade from '@/components/DarkBackgroundBlade';
import EventResults from '@/components/EventResults';
import NewsCarousel from '@/components/NewsCarousel';
import SmallBannerPromo from '@/components/SmallBannerPromo';
import { getDictionary } from '../../dictionaries';

export default async function Home(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = params.lang as 'ca' | 'es' | 'en';
  const dict = await getDictionary(lang);

  const heroData = {
    title: "MOLLET TCG FEST 2026",
    date: "5 y 6 de Septiembre | Merca Vell, Mollet",
    buttons: [
      { text: "Comprar Entradas", url: `/${lang}/eventos/mollet-tcg-fest` }
    ]
  };

  const darkBladeData = {
    title: "El Evento del Año en Cataluña",
    copyHtml: "<p>Aforo para más de 300 personas, despliegue de retransmisión multipunto por el Z2 Team y torneos oficiales. ¡No te quedes sin tu plaza!</p>",
    buttons: [
      { text: "Ver Detalles del Evento", url: `/${lang}/eventos/mollet-tcg-fest` }
    ]
  };

  const resultsData = {
    title: "Próximos Eventos",
    pillars: [
      { id: "tcg", label: "JCC", color: "blue", title: "Mollet TCG Fest - Main Event", img: "/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/eventos/mollet-tcg-fest` },
      { id: "vg", label: "VJ", color: "red", title: "Mollet VGC - Torneo Oficial", img: "/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/eventos/mollet-tcg-fest` },
      { id: "go", label: "GO", color: "green", title: "Mollet GO - Side Events", img: "/static-assets/images/homepage-hero/indianapolis-2048.webp", link: `/${lang}/eventos/mollet-tcg-fest` }
    ]
  };

  const promoData = {
    title: "Asegura tu entrada (Aforo Limitado)",
    buttons: [
      { text: "Comprar Ticket Main Event", url: `/${lang}/eventos/mollet-tcg-fest` },
      { text: "Ver Políticas de Acceso", url: `/${lang}/politica-devolucion` }
    ]
  };

  return (
    <>
      <HomePageHeroBlade {...heroData} />
      <DarkBackgroundBlade {...darkBladeData} />
      <EventResults {...resultsData} />
      <NewsCarousel lang={lang} />
      <SmallBannerPromo {...promoData} />
    </>
  )
}

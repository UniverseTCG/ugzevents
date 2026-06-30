import HomePageHeroBlade from '@/components/HomePageHeroBlade';
import DarkBackgroundBlade from '@/components/DarkBackgroundBlade';
import EventResults from '@/components/EventResults';
import NewsCarousel from '@/components/NewsCarousel';
import SmallBannerPromo from '@/components/SmallBannerPromo';
import NewsTicker from '@/components/NewsTicker';
import SocialWall from '@/components/SocialWall';
import { getDictionary, hasLocale } from '../../dictionaries';
import { notFound } from 'next/navigation';

export default async function Home({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!hasLocale(lang))notFound();const d=(await getDictionary(lang)).home;const img='https://championships.pokemon.com/static-assets/images/homepage-hero/indianapolis-2048.webp';return <div style={{background:'var(--bg-primary)'}}>
 <NewsTicker alerts={d.ticker}/><section className="bg-halftone-pattern clip-diagonal" style={{background:'var(--poke-navy)',paddingBottom:'8vw'}}><HomePageHeroBlade title="MOLLET TCG FEST 2026" date={d.date} buttons={[{text:d.buy,url:`/${lang}/entradas`}]}/><DarkBackgroundBlade title={d.introTitle} copyHtml={`<p>${d.intro}</p>`} buttons={[{text:d.details,url:`/${lang}/info`}]}/></section>
 <section className="container" style={{padding:'4rem 2rem'}}><h2 style={{fontSize:'3rem',textAlign:'center',color:'var(--poke-navy)',textTransform:'uppercase'}}>{d.valuesTitle}</h2><div className="grid grid-cols-3">{d.values.map((x,i)=><div className="glass-card" style={{padding:'2rem'}} key={i}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></section>
 <section style={{padding:'4rem 2rem',background:'var(--championship-bg)'}}><div className="container"><h2 style={{fontSize:'3rem',textAlign:'center',textTransform:'uppercase'}}>{d.infraTitle}</h2><div className="grid grid-cols-2">{d.infra.map((x,i)=><div className="glass-card" style={{padding:'2rem'}} key={i}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div></section>
 <EventResults title={d.tournaments} buyLabel={d.buyNow} pillars={d.tournamentNames.map((title,i)=>({id:['tcg','vg','go'][i],label:['JCC','VJ','GO'][i],color:['blue','red','green'][i],title,img,link:`/${lang}/entradas`}))}/>
 <SocialWall text={d}/><NewsCarousel lang={lang} title={d.carouselTitle} items={d.carousel} portal={d.portal}/><SmallBannerPromo title={d.promo} buttons={[{text:d.buyMain,url:`/${lang}/entradas`},{text:d.policies,url:`/${lang}/politica-devolucion`}]}/>
 </div>}

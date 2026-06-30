import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../../dictionaries';

const ticketUrl = 'https://my.weezevent.com/test-mollet-tcg-fest';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = (await getDictionary(lang)).meta;
  return { title: d.tickets, description: d.ticketsDesc };
}

export default async function TicketsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = (await getDictionary(lang)).tickets;
  const cards = [
    { name: 'Main Event', price: '30 €', features: d.main, button: d.buyMain, color: 'var(--poke-red)', featured: true },
    { name: 'Side Events', price: '15 €', features: d.side, button: d.buySide, color: 'var(--poke-blue)', featured: false },
  ];

  return <div className="page-shell"><section className="container">
    <div className="page-heading">
      <h1>{d.title}</h1>
      <p>{d.intro}</p>
    </div>

    <div className="grid grid-cols-2 ticket-grid">
      {cards.map((card) => <article className="card ticket-card" style={{ borderTop: `6px solid ${card.color}` }} key={card.name}>
        <div className="ticket-card__badge-slot">{card.featured && <span className="pill">{d.best}</span>}</div>
        <h2>{card.name}</h2>
        <p className="ticket-card__price" style={{ color: card.color }}>{card.price}</p>
        <ul className="feature-list">{card.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-official" style={{ background: card.color, color: 'white' }}>{card.button}</a>
      </article>)}
    </div>

    <article className="card spectator-card">
      <h2>{d.spectator}</h2>
      <p className="ticket-card__price" style={{ color: 'var(--poke-green)' }}>5 €</p>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{d.spectatorCopy}</p>
      <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-official" style={{ background: 'var(--poke-green)', color: 'white' }}>{d.spectatorPass}</a>
    </article>
  </section></div>;
}

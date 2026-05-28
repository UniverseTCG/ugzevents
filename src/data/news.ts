export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Torneo' | 'Sorteo' | 'Comunidad' | 'Anuncio';
  imageUrl?: string;
}

export const newsData: NewsArticle[] = [
  {
    slug: 'entradas-oficiales-agotadas',
    title: '¡Entradas del Main Event 50% Agotadas!',
    excerpt: 'La respuesta de la comunidad ha sido increíble. Asegura tu plaza antes de que se agoten por completo.',
    content: 'El Mollet TCG Fest está rompiendo récords. En menos de 24 horas hemos vendido el 50% de las plazas del Main Event...',
    date: '2026-06-01',
    category: 'Anuncio'
  },
  {
    slug: 'z2-team-casting',
    title: 'Z2 Team cubrirá el Streaming Oficial',
    excerpt: 'El equipo de Z2 Team se encargará de la retransmisión oficial del evento en Twitch.',
    content: 'Estamos muy orgullosos de anunciar que Z2 Team traerá su espectacular setup de streaming para cubrir el Main Event y entrevistas...',
    date: '2026-05-28',
    category: 'Comunidad'
  },
  {
    slug: 'sorteo-bienvenida',
    title: 'Sorteo Welcome Pack: Booster Box Exclusiva',
    excerpt: 'Gana una Booster Box japonesa de la última expansión solo por tener tu entrada Side Event.',
    content: 'Todos los asistentes con entrada Side Event o Main Event entran automáticamente en el sorteo de una Booster Box...',
    date: '2026-05-25',
    category: 'Sorteo'
  }
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsData.find(article => article.slug === slug);
}

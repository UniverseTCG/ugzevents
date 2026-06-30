export const newsData=[{slug:'entradas-oficiales-agotadas',date:'2026-06-01',category:0},{slug:'z2-team-casting',date:'2026-05-28',category:1},{slug:'sorteo-bienvenida',date:'2026-05-25',category:2}] as const;
export function getNewsIndex(slug:string){return newsData.findIndex(x=>x.slug===slug)}

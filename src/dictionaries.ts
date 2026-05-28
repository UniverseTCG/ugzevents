import 'server-only'

const dictionaries = {
  ca: () => import('./dictionaries/ca.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'ca' | 'es' | 'en') => {
  return dictionaries[locale]()
}

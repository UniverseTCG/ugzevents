import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ca', 'es', 'en']
const defaultLocale = 'ca'

function getPreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')

  if (!acceptLanguage) return defaultLocale

  const languages = acceptLanguage
    .split(',')
    .map((entry) => {
      const [language, quality = 'q=1'] = entry.trim().toLowerCase().split(';')
      return {
        language: language.split('-')[0],
        quality: Number(quality.replace('q=', '')) || 0,
      }
    })
    .sort((a, b) => b.quality - a.quality)

  for (const { language } of languages) {
    if (language === 'ca') return 'ca'
    if (language === 'es') return 'es'
  }

  return 'en'
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  request.nextUrl.pathname = `/${getPreferredLocale(request)}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}

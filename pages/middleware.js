import { NextRequest, NextResponse } from 'next/server'

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/

// Next JS Middleware
export const middleware = (request) => {
  // Get the information we need from the request object
  const { nextUrl, geo, headers, cookies } = request
  // Cloned url to work with
  const url = nextUrl.clone()
  // Client country, defaults to us
  const country = geo?.country?.toLowerCase() || "us"

  // console.log('geo', geo)
  // console.log('country', country)
  // console.log('nextUrl', nextUrl)


  try {

    if (
      nextUrl.pathname.startsWith('/_next') ||
      nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(nextUrl.pathname)
    ) {
      return
    }
    console.log('nextUrl.locale', nextUrl.locale)
    if (nextUrl.locale === 'default') {
      let locale = cookies.get('NEXT_LOCALE') || 'en'

      switch (country) {
        case "in":
          locale = 'hi'
          break;
        case "ar":
          locale = 'ar'
          break;
        default:
          locale = 'en'
          break;
      }

      return NextResponse.redirect(
        new URL(`/${locale}${nextUrl.pathname}${nextUrl.search}`, url)
      )
    }


    return NextResponse.next()
  } catch (error) {
    console.log(error)
  }
}


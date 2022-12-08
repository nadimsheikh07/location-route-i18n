import { NextResponse } from "next/server"

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

    console.log('geo', geo)
    console.log('nextUrl',nextUrl)

    try {
        // Early return if it is a public file such as an image
        if (PUBLIC_FILE.test(nextUrl.pathname)) {
            return undefined
        }
        // Early return if this is an api route
        if (nextUrl.pathname.includes("/api")) {
            return undefined
        }

        // Early return if we are on a locale other than default
        if (nextUrl.locale !== "en") {
            return undefined
        }


        // if (country === "us") {
        //     url.pathname = `/en/${nextUrl.pathname}`
        //     return NextResponse.redirect(url)
        // }

        return undefined
    } catch (error) {
        console.log(error)
    }
}
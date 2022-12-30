import type {AppProps} from 'next/app'
import "@/styles/globals.scss"
import {Open_Sans} from "@next/font/google"

const opensans = Open_Sans({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"]
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <main className={opensans.className}>
            <Component {...pageProps} />
        </main>
    )
}

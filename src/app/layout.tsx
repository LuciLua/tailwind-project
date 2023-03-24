import Menu from "../components/Menu/Menu";
import '../styles/global.css'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function RootApp({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tailwind</title>
            </head>
            <body className={lexend.className}>
                <Menu />
                {children}
            </body>
        </html>
    )
}
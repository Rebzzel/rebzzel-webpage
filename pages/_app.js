import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <AnimatePresence>
                <Component {...pageProps} />
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default App

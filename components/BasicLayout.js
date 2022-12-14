import clsx from 'clsx'
import Head from 'next/head'

import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Component({ children, ...props }) {
    const childrenContainerClass = clsx(
        'pt-16',
        'px-2',
        'md:px-0',

        'container',
        'mx-auto',
        'md:max-w-xl',
    )

    return (
        <>
            <Head>
                <title>Kirill Paltsev&lsquo;s Webpage</title>
            </Head>
            <div className="flex flex-col min-h-screen justify-between">
                <Navbar/>
                <div className={childrenContainerClass}>
                    { children }
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Component

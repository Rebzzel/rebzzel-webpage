import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import Interactive from './future/Interactive.js'
import GithubButton from './GithubButton.js'
import ThemeSwitcher from './ThemeSwitcher.js'

function Component() {
    const backgroundContainerClass = clsx(
        'fixed',
        'w-full',
        'p-4',

        'bg-[#ffffff50]',
        'dark:bg-[#21242950]',
        'backgrop-blur-sm',
    )

    const mainContainerClass = clsx(
        'mx-auto',
        'max-w-xl',
        'flex',
        'justify-between',
    )

    const router = useRouter()

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
    ];

    const isNavSelected = href => router.asPath === href

    return (
        <div className={backgroundContainerClass}>
            <div className={mainContainerClass}>
                <div className="flex space-x-4 self-center">
                    {navigation.map(nav => (
                        <NextLink key={nav.name} href={nav.href}>
                            <a className={isNavSelected(nav.href) ? 'font-bold' : 'hover:underline'}>
                                <Interactive
                                    className="duration-300"
                                    disabled={isNavSelected(nav.href)}
                                >
                                    {nav.name}
                                </Interactive>
                            </a>
                        </NextLink>
                    ))}
                </div>
                <div className="flex space-x-2">
                    <GithubButton/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}

export default Component

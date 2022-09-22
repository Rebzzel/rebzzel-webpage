import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import GithubButton from './GithubButton.js'
import ThemeSwitcher from './ThemeSwitcher.js'

function Link({ className, ...props }) {
    return (
        <a
            className={clsx(
                className,
                'hover:underline',
            )}
            {...props}
        />
    )
}

function Component() {
    const router = useRouter()

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <div className="p-4 fixed w-full bg-[#ffffff50] dark:bg-[#21242950] backdrop-blur-sm">
            <div className="mx-auto max-w-xl flex justify-between">
                <div className="space-x-4 self-center">
                    {links.map(link =>
                        <NextLink href={link.href} passHref>
                            <Link className={router.asPath === link.href ? 'font-bold' : ''}>{link.name}</Link>
                        </NextLink>
                    )}
                </div>
                <div className="space-x-2">
                    <GithubButton/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}

export default Component

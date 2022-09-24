import clsx from 'clsx'
import Image from 'next/image'
import Interactive from './future/Interactive.js'

function Component({ className, href, imageSrc, children }) {
    return (
        <Interactive className="duration-300">
            <a className="flex flex-col items-center" href={href}>
                <Image
                    layout="intrinsic"
                    src={imageSrc}
                    width={256}
                    height={120}
                    quality={100}
                    objectFit="cover"
                    alt=""
                    className="rounded-md"
                />
                <div className={clsx(
                    'w-full',
                    'p-1',
                    className,
                )}>
                    {children}
                </div>
            </a>
        </Interactive>
    )
}

export default Component

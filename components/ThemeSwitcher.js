import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { HiLightBulb } from 'react-icons/hi'

function Component() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            className={clsx(
                'duration-300',
                'p-2',
                'rounded-md',

                'bg-[#ff0000]',
                'dark:bg-[#ffba08]',

                'hover:bg-[#e00000]',
                'dark:hover:bg-[#faa307]',
                
                'active:bg-[#d00000]',
                'active:dark:bg-[#f48c06]',
            )}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <HiLightBulb
                className="rotate-180"
                color="#fefefe"
                size={20}
            />
        </button>
    )
}

export default Component

import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa'
import Interactive from './future/Interactive.js'

function Component() {
    return (
        <a href="https://github.com/Rebzzel/rebzzel-webpage">
            <Interactive
                className={clsx(
                    'duration-300',
                    'p-2',
                    'rounded-md',
                    'border',

                    'border-slate-300',
                    'dark:border-slate-700',

                    'hover:bg-slate-200',
                    'dark:hover:bg-slate-600',

                    'active:bg-slate-300',
                    'dark:active:bg-slate-700',
                )}
            >
                <FaGithub size={20}/>
            </Interactive>
        </a>
    )
}

export default Component

import clsx from 'clsx'

function Component({ className, ...props }) {
    return (
        <div
            className={clsx(
                className,
                'm-1',
                'px-2 py-1',
                'text-sm',

                'border',
                'rounded-md',
                
                'text-slate-800',
                'bg-slate-100',
                'border-slate-300',
            )}
            {...props}
        />
    )
}

export default Component

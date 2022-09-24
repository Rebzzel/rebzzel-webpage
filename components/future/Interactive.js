import clsx from "clsx"

function Component({
    children,
    enabled: _enabled,
    disabled: _disabled,
    className: _className,
    ...props
}) {
    const enabled = _enabled || !_disabled
    const className = clsx(
        _className,
        ...(!enabled ? [] : [
            'hover:scale-[115%]',
            'active:scale-95',
        ])
    )

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export default Component

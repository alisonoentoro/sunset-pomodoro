import React from 'react'
import cx from 'classnames'


const Button = (props) => {
    const {primary, secondary, tertiary, children, onClick, ...rest} = props

    const classes = cx(
        'flex items-center px-8 py-3  rounded-lg',
        {
            'bg-violet-500 text-white': primary,
            'bg-white text-black' : secondary,
            'bg-zinc-400 text-black': tertiary
        }
    )
    return (
    <button {...rest} className={classes} onClick={onClick}>
        {children}
    </button>
    )
}

export default Button
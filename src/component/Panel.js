import cx from 'classnames'

const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
    'rounded p-3 shadow bg-white'
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

export default Panel

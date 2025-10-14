import React from 'react'
import cx from 'classnames'
import Button from '../component/Button'

const ButtonPage = () => {
    return (
        <div className='bg-black'>
            <h1>Design System</h1>
            <div className="flex gap-4 m-4">
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
                <Button tertiary>Teritary</Button>
            </div>
        </div>
        
    )
}

export default ButtonPage
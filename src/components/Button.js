import React from 'react'

const Button = (props) => {
    const {
        disabled,
        handleClick,
        icon,
        text
    } = props

    return (
        <div className='col s6'>
            <button className='btn-large' onClick={handleClick} disabled={disabled}>
                <i className='material-icons right'>{icon}</i>
                {text}
            </button>
        </div>
    )
}

export default Button

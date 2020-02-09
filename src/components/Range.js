import React from 'react'

const Range = (props) => {
    const {
        disabled,
        handleChange,
        value
    } = props

    return (
        <div className='col s12'>
            <form>
                <p className='range-field'>
                    <input
                        min='1'
                        max='10'
                        onChange={handleChange}
                        type='range'
                        value={value}
                        disabled={disabled}
                    />
                </p>
            </form>
        </div>
    )
}

export default Range

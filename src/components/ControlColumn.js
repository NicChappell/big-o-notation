import React from 'react'

import Range from './Range'

import graph from '../images/big-o-running-time.png'

const ControlColumn = (props) => {
    const {
        handleSizeChange,
        handleSpeedChange,
        size,
        speed,
        start
    } = props

    const color = start ? 'grey-text' : 'black-text'

    return (
        <div>
            <div className='row center-align'>
                <div className='col s12'>
                    <h5 className={color}>Input Size: <b>{size}</b></h5>
                </div>
                <Range
                    disabled={start}
                    handleChange={handleSizeChange}
                    value={size}
                />
            </div>
            <div className='row center-align'>
                <div className='col s12'>
                    <h5>Animation Speed: <b>{speed}</b></h5>
                </div>
                <Range
                    disabled={false}
                    handleChange={handleSpeedChange}
                    value={speed}
                />
            </div>
            <div className="row hide-on-med-and-down">
                <div className='col s12'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={graph} alt="Big O Running Time" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlColumn

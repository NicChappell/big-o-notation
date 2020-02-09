import React from 'react'

import Button from './Button'
import Card from './Card'

import {
    constantTime,
    logarithmicTime,
    linearTime,
    quadraticTime,
    cubicTime
} from '../helpers/algorithms'

const CardList = (props) => {
    const {
        reset,
        resetButton,
        size,
        start,
        startButton,
        speed
    } = props

    return (
        <div>
            <div className="row center-align">
                <Button
                    disabled={start}
                    handleClick={startButton}
                    icon={'data_usage'}
                    text={'Start'}
                />
                <Button
                    disabled={reset}
                    handleClick={resetButton}
                    icon={'refresh'}
                    text={'Reset'}
                />
            </div>
            <div className="row">
                < Card
                    iterations={constantTime(size)}
                    name='Constant'
                    notation='1'
                    reset={reset}
                    speed={speed}
                    start={start}
                />
                < Card
                    iterations={logarithmicTime(size)}
                    name='Logarithmic'
                    notation='log(n)'
                    reset={reset}
                    speed={speed}
                    start={start}
                />
                < Card
                    iterations={linearTime(size)}
                    name='Linear'
                    notation='n'
                    reset={reset}
                    speed={speed}
                    start={start}
                />
                < Card
                    iterations={quadraticTime(size)}
                    name='Quadratic'
                    notation='n²'
                    reset={reset}
                    speed={speed}
                    start={start}
                />
                < Card
                    iterations={cubicTime(size)}
                    name='Cubic'
                    notation='n³'
                    reset={reset}
                    speed={speed}
                    start={start}
                />
            </div>
        </div>
    )
}

export default CardList

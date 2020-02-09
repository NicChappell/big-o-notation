import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const [count, setCount] = useState(0)
    const [progress, setProgress] = useState(0)

    const {
        iterations,
        name,
        notation,
        reset,
        speed,
        start
    } = props

    // Start Effect
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                if (count < iterations) {
                    setCount(count + 1)
                    setProgress((count + 1) / iterations * 100)
                } else {
                    clearInterval(interval)
                }
            }, (1000 / speed))

            return () => clearInterval(interval)
        }
    }, [start, iterations, speed, count, progress])

    // Reset Effect
    useEffect(() => {
        if (reset) {
            setCount(0)
            setProgress(0)
        }
    }, [reset])

    return (
        <div className='col s12 l6'>
            <div className='card'>
                <div className='card-content'>
                    <span className='card-title center-align'>{name}</span>
                    <h6 className='center-align'>O({notation})</h6>
                    <p className='center-align counter'>{count}</p>
                </div>
                <div className='card-action'>
                    <div className='progress'>
                        <div className='determinate' style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

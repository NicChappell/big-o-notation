import React, { useEffect, useState } from 'react'

import CardColumn from './components/CardColumn'
import ControlColumn from './components/ControlColumn'

import './styles/styles.css'

const App = () => {
	const [reset, setReset] = useState(true)
	const [size, setSize] = useState(1)
	const [speed, setSpeed] = useState(1)
	const [start, setStart] = useState(false)

	const handleSizeChange = (e) => {
		console.log('Input Size Range Changed')
		const { value } = e.target
		setSize(value)
	}

	const handleSpeedChange = (e) => {
		console.log('Animation Speed Range Changed')
		const { value } = e.target
		setSpeed(value)
	}

	const resetButton = () => {
		console.log('Reset Button Clicked')
		setReset(!reset)
		setStart(!start)
	}

	const startButton = () => {
		console.log('Start Button Clicked')
		setStart(!start)
		setReset(!reset)
	}

	// Button Clicks
	useEffect(() => {
		console.log(`reset === ${reset}\nstart === ${start}`)
	}, [reset, start])

	// Range Changes
	useEffect(() => {
		console.log(`Input Size: ${size}\nAnimation Speed: ${speed}`)
	}, [size, speed])

	return (
		<div className='container'>
			<div className="row">
				<div className="col s12 l4">
					<ControlColumn
						handleSizeChange={handleSizeChange}
						handleSpeedChange={handleSpeedChange}
						size={size}
						speed={speed}
						start={start}
					/>
				</div>
				<div className="col s12 l8">
					<CardColumn
						reset={reset}
						resetButton={resetButton}
						size={size}
						start={start}
						startButton={startButton}
						speed={speed}
					/>
				</div>
			</div>
		</div>
	)
}

export default App

import { useState } from 'react'
import Light from './Light'
import './TrafficLights.css'

function TrafficLights({ orientation = 'vertical' }) {
  const [currentSignal, setCurrentSignal] = useState('red')
  const [clicks, setClicks] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  })

  const directionClass = orientation === 'horizontal' ? 'horizontal' : 'vertical'

  function handleSelect(color) {
    setCurrentSignal(color)
    setClicks((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }))
  }

  return (
    <div>
      <div className={`traffic-lights ${directionClass}`}>
        <Light color="red" isActive={currentSignal === 'red'} onSelect={handleSelect} />
        <Light color="yellow" isActive={currentSignal === 'yellow'} onSelect={handleSelect} />
        <Light color="green" isActive={currentSignal === 'green'} onSelect={handleSelect} />
      </div>
      <p>
        Red: {clicks.red} | Yellow: {clicks.yellow} | Green: {clicks.green}
      </p>
    </div>
  )
}

export default TrafficLights
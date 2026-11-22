import { useState } from 'react'
import Light from './Light'
import './TrafficLights.css'

function TrafficLights({ orientation = 'vertical' }) {
  const [currentSignal] = useState('red')
  const directionClass = orientation === 'horizontal' ? 'horizontal' : 'vertical'

  return (
    <div className={`traffic-lights ${directionClass}`}>
      <Light color="red" isActive={currentSignal === 'red'} />
      <Light color="yellow" isActive={currentSignal === 'yellow'} />
      <Light color="green" isActive={currentSignal === 'green'} />
    </div>
  )
}

export default TrafficLights
import Light from './Light'
import './TrafficLights.css'

function TrafficLights({ orientation = 'vertical' }) {
  const directionClass = orientation === 'horizontal' ? 'horizontal' : 'vertical'

  return (
    <div className={`traffic-lights ${directionClass}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  )
}

export default TrafficLights
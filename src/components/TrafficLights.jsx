import Light from './Light'
import './TrafficLights.css'

function TrafficLights() {
  return (
    <div className="traffic-lights">
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  )
}

export default TrafficLights
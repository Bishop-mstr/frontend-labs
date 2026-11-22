import { useState } from 'react'
import Light from './Light'
import StatsBar from './StatsBar'
import './TrafficLights.css'

function TrafficLights({ orientation = 'vertical' }) {
  const [currentSignal, setCurrentSignal] = useState('red')
  const [clicks, setClicks] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  })
  const [currentOrientation, setCurrentOrientation] = useState(orientation)

  const directionClass = currentOrientation === 'horizontal' ? 'horizontal' : 'vertical'
  const totalClicks = clicks.red + clicks.yellow + clicks.green
  const orientationLabel =
    currentOrientation === 'vertical'
      ? 'Вертикальна орієнтація'
      : 'Горизонтальна орієнтація'

  function handleSelect(color) {
    setCurrentSignal(color)
    setClicks((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }))
  }

  function handleToggleOrientation() {
    setCurrentOrientation((prev) => (prev === 'vertical' ? 'horizontal' : 'vertical'))
  }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <StatsBar
        currentSignal={currentSignal}
        clicks={clicks}
        totalClicks={totalClicks}
        orientationLabel={orientationLabel}
        onToggleOrientation={handleToggleOrientation}
      />
      <div className={`traffic-lights ${directionClass}`}>
        <Light color="red" isActive={currentSignal === 'red'} onSelect={handleSelect} />
        <Light color="yellow" isActive={currentSignal === 'yellow'} onSelect={handleSelect} />
        <Light color="green" isActive={currentSignal === 'green'} onSelect={handleSelect} />
      </div>
    </div>
  )
}

export default TrafficLights
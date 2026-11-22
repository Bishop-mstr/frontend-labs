import './StatsBar.css'

function StatsBar({ currentSignal, clicks, totalClicks }) {
  return (
    <div className="stats-bar">
      <div className="stats-row">
        <span>Активний сигнал:</span>
        <strong>{currentSignal}</strong>
      </div>
      <div className="stats-counts">
        <span>Red: {clicks.red}</span>
        <span>Yellow: {clicks.yellow}</span>
        <span>Green: {clicks.green}</span>
      </div>
      <div className="stats-row">
        <span>Усього натискань:</span>
        <strong>{totalClicks}</strong>
      </div>
    </div>
  )
}

export default StatsBar
import './StatsBar.css'

function StatsBar({
  currentSignal,
  clicks,
  totalClicks,
  orientationLabel,
  onToggleOrientation,
}) {
  return (
    <div className="stats-bar">
      <div className="stats-row">
        <span>Активний сигнал:</span>
        <strong>{currentSignal}</strong>
      </div>
      <div className="stats-row">
        <span>Орієнтація:</span>
        <strong>{orientationLabel}</strong>
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
      <button
        type="button"
        className="stats-toggle-btn"
        onClick={onToggleOrientation}
      >
        Змінити орієнтацію
      </button>
    </div>
  )
}

export default StatsBar
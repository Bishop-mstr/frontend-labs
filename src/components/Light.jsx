import './Light.css'

function Light({ color, isActive, onSelect }) {
  const activeClass = isActive ? 'active' : ''

  return (
    <div
      className={`light ${activeClass}`}
      style={{
        backgroundColor: color,
        boxShadow: isActive ? '0 0 20px ' + color : undefined,
      }}
      onClick={() => onSelect(color)}
    />
  )
}

export default Light
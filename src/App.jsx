import './App.css'
import TrafficLights from './components/TrafficLights'

function App() {
  return (
    <main className="app">
      <h1>Світлофор</h1>
      <div className="traffic-lights-demo">
        <section className="traffic-light-card">
          <h2>Вертикальний світлофор</h2>
          <TrafficLights orientation="vertical" />
        </section>
        <section className="traffic-light-card">
          <h2>Горизонтальний світлофор</h2>
          <TrafficLights orientation="horizontal" />
        </section>
      </div>
    </main>
  )
}

export default App
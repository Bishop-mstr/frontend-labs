import './App.css'
import TrafficLights from './components/TrafficLights'

function App() {
  return (
    <main className="app">
      <h1>Світлофор</h1>
      <TrafficLights orientation="horizontal" />
    </main>
  )
}

export default App
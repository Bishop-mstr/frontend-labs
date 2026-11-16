import './App.css'
import Light from './components/Light'

function App() {
  return (
    <main className="app">
      <h1>Світлофор</h1>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <Light color="red" />
        <Light color="yellow" />
        <Light color="green" />
      </div>
    </main>
  )
}

export default App
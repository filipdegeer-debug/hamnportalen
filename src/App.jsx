import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import './App.css'

function App() {
  return (
    <main className="app">
      <section className="map-panel">
        <SwedenMap />
      </section>

      <InfoPanel />
    </main>
  )
}

export default App
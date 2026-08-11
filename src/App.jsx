import { useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import { ports } from './data/ports'
import './App.css'

function App() {
  const [selectedPort, setSelectedPort] = useState(ports[0])

  return (
    <main className="app">
      <section className="map-panel">
        <SwedenMap
          ports={ports}
          selectedPort={selectedPort}
          onSelectPort={setSelectedPort}
        />
      </section>

      <InfoPanel port={selectedPort} />
    </main>
  )
}

export default App
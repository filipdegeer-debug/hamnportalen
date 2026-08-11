import { useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import SearchBox from './components/SearchBox'
import { ports } from './data/ports'
import './App.css'

function App() {
  const [selectedPort, setSelectedPort] = useState(ports[0])
  const [searchText, setSearchText] = useState('')

  const filteredPorts = ports.filter((port) => {
    const search = searchText.toLowerCase()

    return (
      port.namn.toLowerCase().includes(search) ||
      port.stad.toLowerCase().includes(search) ||
      port.hamnanlaggning.toLowerCase().includes(search)
    )
  })

  function selectPort(port) {
    setSelectedPort(port)
    setSearchText('')
  }

  return (
    <main className="app">
      <section className="map-panel">

        <SearchBox
          searchText={searchText}
          setSearchText={setSearchText}
          filteredPorts={filteredPorts}
          onSelectPort={selectPort}
        />

        <SwedenMap
          ports={ports}
          selectedPort={selectedPort}
          onSelectPort={selectPort}
        />
      </section>

      <InfoPanel port={selectedPort} />
    </main>
  )
}

export default App
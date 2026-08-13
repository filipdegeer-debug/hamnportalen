import { useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import SearchBox from './components/SearchBox'
import { getAllPorts } from './services/portService'
import { normalizeSearch } from './utils/searchUtils'
import './App.css'

const ports = getAllPorts()

console.log('Alla hamnar:', ports)
console.log('NCM-kunder:', ports.filter(port => port.ncmKund))

function App() {
  const [selectedPort, setSelectedPort] = useState(null)
  const [mapFocusPort, setMapFocusPort] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [showOnlyCustomers, setShowOnlyCustomers] = useState(false)

  const search = normalizeSearch(searchText)

  const filteredPorts = ports.filter((port) => {
    const matchesSearch =
      normalizeSearch(port.id).includes(search) ||
      normalizeSearch(port.hamnNamn).includes(search) ||
      normalizeSearch(port.hamnanlaggningNamn).includes(search) ||
      normalizeSearch(port.operatör).includes(search)

    const matchesCustomer =
      !showOnlyCustomers || port.ncmKund

    return matchesSearch && matchesCustomer
  })

  function selectPort(port) {
    setSelectedPort(port)
    setMapFocusPort(port)
  }

  function updateSearch(text) {
    setSearchText(text)

    if (text === '') {
      setMapFocusPort(null)
      setSelectedPort(null)
    }
  }

  const visiblePorts =
    searchText.trim() === ''
      ? (showOnlyCustomers
          ? ports.filter((p) => p.ncmKund)
          : ports)
      : filteredPorts

  return (
    <main className="app">
      <section className="map-panel">

        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <button onClick={() => setShowOnlyCustomers(false)}>
            Visa alla
          </button>

          <button onClick={() => setShowOnlyCustomers(true)}>
            Visa endast NCM-kunder
          </button>
        </div>

        <SearchBox
          searchText={searchText}
          setSearchText={updateSearch}
          filteredPorts={filteredPorts}
          onSelectPort={selectPort}
        />

        <SwedenMap
          ports={visiblePorts}
          selectedPort={selectedPort}
          mapFocusPort={mapFocusPort}
          onSelectPort={selectPort}
        />

      </section>

      <InfoPanel port={selectedPort} />

    </main>
  )
}

export default App
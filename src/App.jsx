import { useEffect, useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import SearchBox from './components/SearchBox'
import {
  loadPorts,
  getAllPorts,
  updatePortInMemory,
} from './services/portService'
import { normalizeSearch } from './utils/searchUtils'
import './App.css'

function App() {
  const [ports, setPorts] = useState([])

  const [selectedPort, setSelectedPort] = useState(null)
  const [mapFocusPort, setMapFocusPort] = useState(null)

  const [searchText, setSearchText] = useState('')
  const [showOnlyCustomers, setShowOnlyCustomers] = useState(false)

  useEffect(() => {
    async function init() {
      await loadPorts()
      setPorts([...getAllPorts()])
    }

    init()
  }, [])

  const search = normalizeSearch(searchText)

  const filteredPorts = ports.filter((port) => {
    const matchesSearch =
      normalizeSearch(port.id).includes(search) ||
      normalizeSearch(port.hamnNamn).includes(search) ||
      normalizeSearch(port.hamnanlaggningNamn).includes(search) ||
      normalizeSearch(port.operatör).includes(search)

    const matchesCustomer =
      !showOnlyCustomers ||
      port.ncmKund

    return matchesSearch && matchesCustomer
  })

  function selectPort(port) {
    setSelectedPort(port)
    setMapFocusPort(port)
  }

  function updateSearch(text) {
    setSearchText(text)

    if (text === '') {
      setSelectedPort(null)
      setMapFocusPort(null)
    }
  }

  function handlePortSaved(id, values) {
    const updatedPort = updatePortInMemory(id, values)

    setPorts([...getAllPorts()])

    if (updatedPort) {
      setSelectedPort(updatedPort)
      setMapFocusPort(updatedPort)
    }
  }

  const visiblePorts =
    searchText.trim() === ''
      ? (
          showOnlyCustomers
            ? ports.filter((p) => p.ncmKund)
            : ports
        )
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
          <button
            onClick={() =>
              setShowOnlyCustomers(false)
            }
          >
            Visa alla
          </button>

          <button
            onClick={() =>
              setShowOnlyCustomers(true)
            }
          >
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

      <InfoPanel
        port={selectedPort}
        onPortSaved={handlePortSaved}
      />
    </main>
  )
}

export default App
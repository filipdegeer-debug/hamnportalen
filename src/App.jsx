import { useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
import SearchBox from './components/SearchBox'
import { getAllPorts } from './services/portService'
import { normalizeSearch } from './utils/searchUtils'
import './App.css'

const ports = getAllPorts()

function App() {
  const [selectedPort, setSelectedPort] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [lockedSelection, setLockedSelection] = useState(false)

  const search = normalizeSearch(searchText)

  const filteredPorts = ports.filter((port) => {
    return (
      normalizeSearch(port.id).includes(search) ||
      normalizeSearch(port.hamnNamn).includes(search) ||
      normalizeSearch(port.hamnanlaggningNamn).includes(search) ||
      normalizeSearch(port.operatör).includes(search)
    )
  })

  function selectPort(port) {
    setSelectedPort(port)
    setSearchText(port.hamnanlaggningNamn)
    setLockedSelection(true)
  }

  function updateSearch(text) {
    setSearchText(text)

    if (text === '') {
      setLockedSelection(false)
      setSelectedPort(null)
    }
  }

  let visiblePorts

  if (lockedSelection && selectedPort) {
    visiblePorts = [selectedPort]
  } else if (searchText.trim() === '') {
    visiblePorts = ports
  } else {
    visiblePorts = filteredPorts
  }

  return (
    <main className="app">

      <section className="map-panel">

        <SearchBox
          searchText={searchText}
          setSearchText={updateSearch}
          filteredPorts={filteredPorts}
          onSelectPort={selectPort}
        />

        <SwedenMap
          ports={visiblePorts}
          selectedPort={selectedPort}
          onSelectPort={selectPort}
        />

      </section>

      <InfoPanel port={selectedPort} />

    </main>
  )
}

export default App
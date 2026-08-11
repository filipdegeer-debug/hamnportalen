import { useState } from 'react'
import SwedenMap from './components/SwedenMap'
import InfoPanel from './components/InfoPanel'
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
        <div
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
            zIndex: 1000,
            width: 320,
          }}
        >
          <input
            type="text"
            placeholder="🔍 Sök hamn..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />

          {searchText !== '' && (
            <div
              style={{
                background: 'white',
                border: '1px solid #ccc',
                borderTop: 'none',
                maxHeight: '250px',
                overflowY: 'auto',
              }}
            >
              {filteredPorts.map((port) => (
                <div
                  key={port.hamnanlaggning}
                  onClick={() => selectPort(port)}
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                  }}
                >
                  <strong>{port.namn}</strong>
                  <br />
                  <small>
                    {port.stad} • {port.hamnanlaggning}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>

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
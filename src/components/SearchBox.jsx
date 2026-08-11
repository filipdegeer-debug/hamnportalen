import './SearchBox.css'

function SearchBox({
  searchText,
  setSearchText,
  filteredPorts,
  onSelectPort,
}) {
  return (
    <div className="search-box">

      <input
        className="search-input"
        type="text"
        placeholder="🔍 Sök hamn, hamnanläggning eller IMO..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {searchText.trim() !== '' && (
        <div className="search-results">

          {filteredPorts.length === 0 && (
            <div className="search-result">
              Ingen träff
            </div>
          )}

          {filteredPorts.map((port) => (

            <div
              key={port.id}
              className="search-result"
              onClick={() => onSelectPort(port)}
            >

              <strong>{port.hamnanlaggningNamn}</strong>

              <br />

              <small>{port.hamnNamn}</small>

              <br />

              <small>{port.id}</small>

            </div>

          ))}

        </div>
      )}

    </div>
  )
}

export default SearchBox
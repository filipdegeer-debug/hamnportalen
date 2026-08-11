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
        placeholder="🔍 Sök hamn..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {searchText !== '' && (
        <div className="search-results">
          {filteredPorts.map((port) => (
            <div
              key={port.hamnanlaggning}
              className="search-result"
              onClick={() => onSelectPort(port)}
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
  )
}

export default SearchBox
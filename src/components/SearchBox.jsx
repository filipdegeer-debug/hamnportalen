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
              key={port.id}
              className="search-result"
              onClick={() => onSelectPort(port)}
            >
              <strong>
                {port.ncmKund ? '🟢 ' : '🔴 '}
                {port.hamnNamn}
              </strong>

              <br />

              <small>
                {port.hamnanlaggningNamn}
              </small>

              <br />

              <small>
                {port.id}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBox
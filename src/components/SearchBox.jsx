import './SearchBox.css'

function SearchBox({
  searchText,
  setSearchText,
  filteredPorts,
  onSelectPort,
}) {
  const showResults =
    searchText.trim() !== '' &&
    filteredPorts.length > 0

  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        placeholder="Sök hamn, GISIS-ID, operatör..."
        value={searchText}
        onChange={(event) =>
          setSearchText(event.target.value)
        }
      />

      {showResults && (
        <div className="search-results">
          {filteredPorts.slice(0, 25).map((port) => (
            <div
              key={port.id}
              className="search-result"
              onClick={() =>
                onSelectPort(port)
              }
            >
              <strong>{port.hamnNamn}</strong>
              <br />
              <span>
                {port.hamnanlaggningNamn}
              </span>
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
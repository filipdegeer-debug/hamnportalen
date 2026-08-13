function EditGeneral({
    isCustomer,
    setIsCustomer,
    operator,
    setOperator,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
  }) {
    return (
      <>
        <h3>🏢 Grunddata</h3>
  
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px',
          }}
        >
          <input
            type="checkbox"
            checked={isCustomer}
            onChange={(e) => setIsCustomer(e.target.checked)}
          />
  
          NCM-kund
        </label>
  
        <label>Operatör</label>
  
        <input
          type="text"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
          }}
        />
  
        <label>Latitud</label>
  
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
          }}
        />
  
        <label>Longitud</label>
  
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '20px',
          }}
        />
      </>
    )
  }
  
  export default EditGeneral
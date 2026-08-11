function InfoPanel({ port }) {
  if (!port) {
    return (
      <aside className="info-panel">
        <p>Välj en hamn på kartan.</p>
      </aside>
    )
  }

  return (
    <aside className="info-panel">
      <h2>{port.namn}</h2>

      <p>
        <strong>{port.hamnanlaggning}</strong>
      </p>

      <p>{port.kund ? '🟢 NCM-kund' : '🔴 Ej NCM-kund'}</p>

      <hr />

      <h3>📍 Grunddata</h3>

      <p><strong>Operatör</strong></p>
      <p>{port.operatör || '-'}</p>

      <p><strong>Adress</strong></p>
      <p style={{ whiteSpace: 'pre-line' }}>
        {port.gatuadress || '-'}
      </p>

      <p><strong>GISIS</strong></p>
      <p>{port.gisis || '-'}</p>

      <hr />

      <h3>🛡 Säkerhet</h3>

      <p><strong>Skyddsnivå</strong></p>
      <p>{port.skyddsniva}</p>

      <hr />

      <h3>👤 Kontakt</h3>

      <p><strong>PFSO</strong></p>
      <p>{port.pfso || '-'}</p>

      <p><strong>Telefon</strong></p>
      <p>{port.pfsoTelefon || '-'}</p>

      <p><strong>E-post</strong></p>
      <p>{port.pfsoEmail || '-'}</p>

      <hr />

      <h3>📄 PFSP</h3>

      <p><strong>Inskickad</strong></p>
      <p>{port.pfspInskickad || '-'}</p>

      <p><strong>Godkänd till och med</strong></p>
      <p>{port.pfspGodkandTill || '-'}</p>

      <hr />

      <h3>📂 Dokument</h3>

      {port.dokument?.length ? (
        <ul>
          {port.dokument.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      ) : (
        <p>Inga dokument.</p>
      )}

      <button style={{ marginTop: '8px' }}>
        + Lägg till dokument
      </button>

      <hr />

      <h3>📝 Anteckningar</h3>

      <p>{port.anteckningar || 'Inga anteckningar.'}</p>

      <button style={{ marginTop: '8px' }}>
        Spara anteckningar
      </button>

      <hr />

      <h3>🤖 AI</h3>

      <button>
        Analysera hamnen
      </button>
    </aside>
  )
}

export default InfoPanel
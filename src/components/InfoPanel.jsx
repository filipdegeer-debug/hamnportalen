function InfoPanel({ port }) {
  return (
    <aside className="info-panel">
      <h2>{port.namn}</h2>

      <p>
        <strong>Hamnanläggning:</strong> {port.hamnanlaggning}
      </p>

      <p>
        <strong>Stad:</strong> {port.stad}
      </p>

      <p>
        <strong>Kund:</strong> {port.kund ? '🟢 Ja' : '🔴 Nej'}
      </p>

      <hr />

      <p>
        <strong>CER:</strong> {port.cer ? 'Ja' : 'Nej'}
      </p>

      <p>
        <strong>NIS2:</strong> {port.nis2 ? 'Ja' : 'Nej'}
      </p>

      <p>
        <strong>PFSO:</strong> {port.pfso || '-'}
      </p>

      <hr />

      <h3>Dokument</h3>

      {port.dokument.length > 0 ? (
        <ul>
          {port.dokument.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      ) : (
        <p>Inga dokument.</p>
      )}
    </aside>
  )
}

export default InfoPanel
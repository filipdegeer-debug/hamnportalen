function InfoPanel() {
    return (
      <aside className="info-panel">
        <h2>Sundsvall Oljehamn</h2>
  
        <p><strong>Hamnanläggning:</strong> SEDTS003</p>
        <p><strong>Stad:</strong> Sundsvall</p>
        <p><strong>Kund:</strong> 🟢 Ja</p>
  
        <hr />
  
        <p><strong>CER:</strong> Nej</p>
        <p><strong>NIS2:</strong> Nej</p>
        <p><strong>PFSO:</strong> -</p>
  
        <hr />
  
        <h3>Dokument</h3>
  
        <ul>
          <li>PFSA</li>
          <li>PSP</li>
          <li>Internrevision</li>
        </ul>
      </aside>
    )
  }
  
  export default InfoPanel
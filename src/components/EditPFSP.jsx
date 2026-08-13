function EditPFSP({
    submitted,
    setSubmitted,
    approvedUntil,
    setApprovedUntil,
  }) {
    return (
      <>
        <h3>📄 PFSP</h3>
  
        <label>Inskickad</label>
  
        <input
          type="date"
          value={submitted}
          onChange={(e) => setSubmitted(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
          }}
        />
  
        <label>Godkänd till och med</label>
  
        <input
          type="date"
          value={approvedUntil}
          onChange={(e) => setApprovedUntil(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '20px',
          }}
        />
      </>
    )
  }
  
  export default EditPFSP
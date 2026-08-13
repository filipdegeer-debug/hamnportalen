function EditContact({
    pfso,
    setPfso,
    phone,
    setPhone,
    email,
    setEmail,
  }) {
    return (
      <>
        <h3>👤 Kontakt</h3>
  
        <label>PFSO</label>
  
        <input
          type="text"
          value={pfso}
          onChange={(e) => setPfso(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
          }}
        />
  
        <label>Telefon</label>
  
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
          }}
        />
  
        <label>E-post</label>
  
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '20px',
          }}
        />
      </>
    )
  }
  
  export default EditContact
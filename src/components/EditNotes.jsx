function EditNotes({
    notes,
    setNotes,
  }) {
    return (
      <>
        <h3>📝 Anteckningar</h3>
  
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={8}
          style={{
            width: '100%',
            padding: '10px',
            resize: 'vertical',
            marginBottom: '20px',
            fontFamily: 'inherit',
          }}
        />
      </>
    )
  }
  
  export default EditNotes
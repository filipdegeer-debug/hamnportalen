import { useState } from 'react'

function EditDocuments({
  documents,
  setDocuments,
}) {

  const [newDocument, setNewDocument] = useState('')

  function addDocument() {

    if (newDocument.trim() === '') return

    setDocuments([
      ...documents,
      newDocument,
    ])

    setNewDocument('')

  }

  function removeDocument(index) {

    setDocuments(
      documents.filter((_, i) => i !== index)
    )

  }

  return (

    <>

      <h3>📂 Dokument</h3>

      {documents.map((doc, index) => (

        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >

          <span>📄 {doc}</span>

          <button
            onClick={() => removeDocument(index)}
          >
            🗑️
          </button>

        </div>

      ))}

      <input

        type="text"

        value={newDocument}

        onChange={(e) =>
          setNewDocument(e.target.value)
        }

        placeholder="Nytt dokument..."

        style={{
          width: '100%',
          padding: '8px',
          marginTop: '10px',
        }}

      />

      <button

        onClick={addDocument}

        style={{
          width: '100%',
          marginTop: '10px',
        }}

      >

        + Lägg till dokument

      </button>

    </>

  )

}

export default EditDocuments
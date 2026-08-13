import EditGeneral from './EditGeneral'
import EditContact from './EditContact'
import EditPFSP from './EditPFSP'
import EditNotes from './EditNotes'
import EditDocuments from './EditDocuments'

function EditPanel({

  isCustomer,
  setIsCustomer,

  operator,
  setOperator,

  latitude,
  setLatitude,

  longitude,
  setLongitude,

  pfso,
  setPfso,

  phone,
  setPhone,

  email,
  setEmail,

  submitted,
  setSubmitted,

  approvedUntil,
  setApprovedUntil,

  notes,
  setNotes,

  documents,
  setDocuments,

  onSave,

}) {

  return (

    <>

      <EditGeneral

        isCustomer={isCustomer}
        setIsCustomer={setIsCustomer}

        operator={operator}
        setOperator={setOperator}

        latitude={latitude}
        setLatitude={setLatitude}

        longitude={longitude}
        setLongitude={setLongitude}

      />

      <hr />

      <EditContact

        pfso={pfso}
        setPfso={setPfso}

        phone={phone}
        setPhone={setPhone}

        email={email}
        setEmail={setEmail}

      />

      <hr />

      <EditPFSP

        submitted={submitted}
        setSubmitted={setSubmitted}

        approvedUntil={approvedUntil}
        setApprovedUntil={setApprovedUntil}

      />

      <hr />

      <EditNotes

        notes={notes}
        setNotes={setNotes}

      />

      <hr />

      <EditDocuments

        documents={documents}
        setDocuments={setDocuments}

      />

      <button

        onClick={onSave}

        style={{
          width: '100%',
          marginTop: '25px',
          padding: '12px',
          fontWeight: 'bold',
          fontSize: '16px',
        }}

      >

        💾 Spara alla ändringar

      </button>

    </>

  )

}

export default EditPanel
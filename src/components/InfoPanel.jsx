import { useState, useEffect } from 'react'

import { useCustomData } from '../context/CustomDataContext'

import InfoTabs from './InfoTabs'
import EditPanel from './EditPanel'

function InfoPanel({ port }) {

  const { updatePort } = useCustomData()

  const [activeTab, setActiveTab] = useState('info')

  const [isCustomer, setIsCustomer] = useState(false)
  const [operator, setOperator] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const [pfso, setPfso] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [submitted, setSubmitted] = useState('')
  const [approvedUntil, setApprovedUntil] = useState('')

  const [notes, setNotes] = useState('')
  const [documents, setDocuments] = useState([])

  useEffect(() => {

    if (!port) return

    setActiveTab('info')

    setIsCustomer(port.ncmKund)
    setOperator(port.operatör || '')
    setLatitude(port.latitud)
    setLongitude(port.longitud)

    setPfso(port.pfso || '')
    setPhone(port.pfsoTelefon || '')
    setEmail(port.pfsoEmail || '')

    setSubmitted(port.pfspInskickad || '')
    setApprovedUntil(port.pfspGodkandTill || '')

    setNotes(port.anteckningar || '')
    setDocuments(port.dokument || [])

  }, [port])

  if (!port) {
    return (
      <aside className="info-panel">
        <p>Välj en hamnanläggning på kartan.</p>
      </aside>
    )
  }

  function saveChanges() {

    updatePort(port.id, {

      ncmKund: isCustomer,
      operatör: operator,

      latitud: Number(latitude),
      longitud: Number(longitude),

      pfso,
      pfsoTelefon: phone,
      pfsoEmail: email,

      pfspInskickad: submitted,
      pfspGodkandTill: approvedUntil,

      anteckningar: notes,

      dokument: documents,

    })

    alert('Ändringarna sparades i minnet.')

  }

  return (

    <aside className="info-panel">

      <h2>{port.hamnNamn}</h2>

      <p>
        <strong>{port.hamnanlaggningNamn}</strong>
      </p>

      <p
        style={{
          color: isCustomer ? '#1b8f3a' : '#c62828',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        {isCustomer ? '🟢 NCM-kund' : '🔴 Ej NCM-kund'}
      </p>

      <InfoTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'info' && (

        <>

          <h3>📍 Grunddata</h3>

          <p><strong>GISIS-ID</strong></p>
          <p>{port.id}</p>

          <p><strong>Operatör</strong></p>
          <p>{operator || '-'}</p>

          <p><strong>Adress</strong></p>
          <p>{port.gatuadress || '-'}</p>

          <hr />

          <h3>👤 Kontakt</h3>

          <p><strong>PFSO</strong></p>
          <p>{pfso || '-'}</p>

          <p><strong>Telefon</strong></p>
          <p>{phone || '-'}</p>

          <p><strong>E-post</strong></p>
          <p>{email || '-'}</p>

          <hr />

          <h3>📄 PFSP</h3>

          <p><strong>Inskickad</strong></p>
          <p>{submitted || '-'}</p>

          <p><strong>Godkänd till</strong></p>
          <p>{approvedUntil || '-'}</p>

          <hr />

          <h3>📝 Anteckningar</h3>

          <p>{notes || 'Inga anteckningar.'}</p>

        </>

      )}

      {activeTab === 'edit' && (

        <EditPanel

          isCustomer={isCustomer}
          setIsCustomer={setIsCustomer}

          operator={operator}
          setOperator={setOperator}

          latitude={latitude}
          setLatitude={setLatitude}

          longitude={longitude}
          setLongitude={setLongitude}

          pfso={pfso}
          setPfso={setPfso}

          phone={phone}
          setPhone={setPhone}

          email={email}
          setEmail={setEmail}

          submitted={submitted}
          setSubmitted={setSubmitted}

          approvedUntil={approvedUntil}
          setApprovedUntil={setApprovedUntil}

          notes={notes}
          setNotes={setNotes}

          documents={documents}
          setDocuments={setDocuments}

          onSave={saveChanges}

        />

      )}

      {activeTab === 'documents' && (

        <>
          <h3>📂 Dokument</h3>

          {documents.length === 0
            ? <p>Inga dokument.</p>
            : documents.map((doc) => (
                <p key={doc}>📄 {doc}</p>
              ))
          }
        </>

      )}

      {activeTab === 'ai' && (

        <>
          <h3>🤖 AI-assistent</h3>

          <button style={{ width: '100%', marginBottom: '10px' }}>
            Analysera hamnanläggning
          </button>

          <button style={{ width: '100%', marginBottom: '10px' }}>
            Sammanfatta PFSP
          </button>

          <button style={{ width: '100%' }}>
            Kontrollera saknade uppgifter
          </button>

        </>

      )}

    </aside>

  )

}

export default InfoPanel
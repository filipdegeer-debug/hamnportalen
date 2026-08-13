function InfoTabs({ activeTab, setActiveTab }) {
    const tabs = [
      { id: 'info', label: '📍 Grunddata' },
      { id: 'edit', label: '✏️ Redigera' },
      { id: 'documents', label: '📂 Dokument' },
      { id: 'ai', label: '🤖 AI' },
    ]
  
    return (
      <div
        style={{
          display: 'flex',
          gap: '6px',
          marginBottom: '15px',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              border:
                activeTab === tab.id
                  ? '2px solid #1976d2'
                  : '1px solid #ccc',
              background:
                activeTab === tab.id
                  ? '#e3f2fd'
                  : '#fff',
              cursor: 'pointer',
              fontWeight:
                activeTab === tab.id
                  ? 'bold'
                  : 'normal',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    )
  }
  
  export default InfoTabs
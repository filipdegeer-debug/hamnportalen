import { createContext, useContext, useEffect, useState } from 'react'

import {
  loadCustomData,
  saveCustomData,
} from '../services/api'

const CustomDataContext = createContext()

export function CustomDataProvider({ children }) {
  const [customData, setCustomData] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function init() {
      try {
        const data = await loadCustomData()

        setCustomData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoaded(true)
      }
    }

    init()
  }, [])

  async function updatePort(id, values) {
    const updated = {
      ...customData,

      [id]: {
        ...(customData[id] || {}),
        ...values,
      },
    }

    setCustomData(updated)

    await saveCustomData(updated)

    return updated[id]
  }

  function getPort(id) {
    return customData[id] || {}
  }

  return (
    <CustomDataContext.Provider
      value={{
        loaded,
        customData,
        updatePort,
        getPort,
      }}
    >
      {children}
    </CustomDataContext.Provider>
  )
}

export function useCustomData() {
  return useContext(CustomDataContext)
}
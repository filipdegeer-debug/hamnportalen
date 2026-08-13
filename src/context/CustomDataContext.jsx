import { createContext, useContext, useEffect, useState } from 'react'

import {
  loadCustomData,
  saveCustomData,
} from '../services/api'

const CustomDataContext = createContext()

export function CustomDataProvider({ children }) {

  const [customData, setCustomData] = useState({})

  useEffect(() => {

    async function load() {

      const data = await loadCustomData()

      setCustomData(data)

    }

    load()

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

  }

  function getPort(id) {

    return customData[id] || {}

  }

  return (

    <CustomDataContext.Provider
      value={{
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
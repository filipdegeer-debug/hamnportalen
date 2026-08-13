const API_URL = 'http://localhost:3001/api'

export async function loadCustomData() {

  const response = await fetch(`${API_URL}/customData`)

  return await response.json()

}

export async function saveCustomData(data) {

  const response = await fetch(`${API_URL}/customData`, {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),

  })

  return await response.json()

}
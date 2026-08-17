const API_URL = '/api'

async function handleResponse(response, errorMessage) {
  if (!response.ok) {
    throw new Error(errorMessage)
  }

  return await response.json()
}

export async function loadCustomData() {
  const response = await fetch(`${API_URL}/customData`)

  return await handleResponse(
    response,
    'Kunde inte hämta sparad data.'
  )
}

export async function saveCustomData(data) {
  const response = await fetch(`${API_URL}/customData`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })

  return await handleResponse(
    response,
    'Kunde inte spara data.'
  )
}
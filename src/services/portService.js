const API_URL = '/api'

let ports = []

export async function loadPorts() {
  const response = await fetch(`${API_URL}/ports`)

  if (!response.ok) {
    throw new Error('Kunde inte hämta hamnar från API.')
  }

  ports = await response.json()

  return ports
}

export function getAllPorts() {
  return ports
}

export function getPortById(id) {
  return ports.find((port) => port.id === id)
}

export function updatePortInMemory(id, values) {
  ports = ports.map((port) => {
    if (port.id !== id) {
      return port
    }

    return {
      ...port,
      ...values,
    }
  })

  return getPortById(id)
}

export function replaceAllPorts(newPorts) {
  ports = newPorts

  return ports
}
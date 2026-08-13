import { ports } from '../data/ports.generated.js'
import { customData } from '../data/ports.custom.js'

export function getAllPorts() {
  return ports.map((port) => ({
    ...port,
    ...(customData[port.id] || {}),
  }))
}

export function getPortById(id) {
  return getAllPorts().find((port) => port.id === id)
}
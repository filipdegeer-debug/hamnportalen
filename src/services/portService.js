import { ports } from '../data/ports.generated.js'

export function getAllPorts() {
  return ports
}

export function getPortById(id) {
  return ports.find(port => port.id === id)
}
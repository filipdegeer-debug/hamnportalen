import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { getPortMarkerIcon } from '../utils/portMarkerIcon'

const SWEDEN_CENTER = [62.5, 16.5]
const SWEDEN_ZOOM = 5

function FlyToPort({ port }) {
  const map = useMap()

  useEffect(() => {
    if (port) {
      map.flyTo([port.latitud, port.longitud], 9, {
        duration: 1.2,
      })
    }
  }, [port, map])

  return null
}

function PortMarker({ port, selectedPort, onSelectPort }) {
  const markerRef = useRef(null)

  useEffect(() => {
    if (
      selectedPort &&
      selectedPort.hamnanlaggning === port.hamnanlaggning
    ) {
      markerRef.current?.openPopup()
    }
  }, [selectedPort, port])

  return (
    <Marker
      ref={markerRef}
      position={[port.latitud, port.longitud]}
      icon={getPortMarkerIcon(port.kund)}
      eventHandlers={{
        click: () => onSelectPort(port),
      }}
    >
      <Popup>
        <strong>{port.namn}</strong>
        <br />
        Hamnanläggning: {port.hamnanlaggning}
        <br />
        Kund: {port.kund ? 'Ja' : 'Nej'}
      </Popup>
    </Marker>
  )
}

function SwedenMap({ ports, selectedPort, onSelectPort }) {
  return (
    <MapContainer
      center={SWEDEN_CENTER}
      zoom={SWEDEN_ZOOM}
      scrollWheelZoom
      className="sweden-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToPort port={selectedPort} />

      {ports.map((port) => (
        <PortMarker
          key={port.hamnanlaggning}
          port={port}
          selectedPort={selectedPort}
          onSelectPort={onSelectPort}
        />
      ))}
    </MapContainer>
  )
}

export default SwedenMap
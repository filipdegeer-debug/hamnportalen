import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { getPortMarkerIcon } from '../utils/portMarkerIcon'

const SWEDEN_CENTER = [62.5, 16.5]
const SWEDEN_ZOOM = 5
const PORT_ZOOM = 15

function FlyToPort({ port }) {
  const map = useMap()

  useEffect(() => {
    if (port) {
      map.flyTo(
        [port.latitud, port.longitud],
        PORT_ZOOM,
        {
          duration: 1.2,
        }
      )
    }
  }, [port, map])

  return null
}

function PortMarker({ port, selectedPort, onSelectPort }) {
  const markerRef = useRef(null)

  useEffect(() => {
    if (
      selectedPort &&
      selectedPort.id === port.id
    ) {
      markerRef.current?.openPopup()
    }
  }, [selectedPort, port])

  return (
    <Marker
      ref={markerRef}
      position={[port.latitud, port.longitud]}
      icon={getPortMarkerIcon(port.ncmKund)}
      eventHandlers={{
        click: () => onSelectPort(port),
      }}
    >
      <Popup>
        <strong>{port.hamnNamn}</strong>

        <br />

        {port.hamnanlaggningNamn}

        <br />

        {port.id}

        <br />

        {port.ncmKund ? '🟢 NCM-kund' : '🔴 Ej kund'}
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
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToPort port={selectedPort} />

      {ports.map((port) => (
        <PortMarker
          key={port.id}
          port={port}
          selectedPort={selectedPort}
          onSelectPort={onSelectPort}
        />
      ))}
    </MapContainer>
  )
}

export default SwedenMap
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { getPortMarkerIcon } from '../utils/portMarkerIcon'

const SWEDEN_CENTER = [62.5, 16.5]
const SWEDEN_ZOOM = 5
const PORT_ZOOM = 13

function MapController({ ports, mapFocusPort }) {
  const map = useMap()

  useEffect(() => {
    if (ports.length === 0) return

    // Om användaren har valt en hamnanläggning
    if (mapFocusPort) {
      map.flyTo(
        [mapFocusPort.latitud, mapFocusPort.longitud],
        PORT_ZOOM,
        {
          duration: 1.1,
        }
      )
      return
    }

    // Om flera hamnar visas (t.ex. sökning på Göteborg)
    if (ports.length > 1) {
      const bounds = L.latLngBounds(
        ports.map((port) => [port.latitud, port.longitud])
      )

      map.flyToBounds(bounds, {
        padding: [50, 50],
        maxZoom: PORT_ZOOM,
        duration: 1.2,
      })
    }
  }, [ports, mapFocusPort, map])

  return null
}

function PortMarker({
  port,
  selectedPort,
  onSelectPort,
}) {
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

        {port.ncmKund
          ? '🟢 NCM-kund'
          : '🔴 Ej kund'}
      </Popup>
    </Marker>
  )
}

function SwedenMap({
  ports,
  selectedPort,
  mapFocusPort,
  onSelectPort,
}) {
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

      <MapController
        ports={ports}
        mapFocusPort={mapFocusPort}
      />

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
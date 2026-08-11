import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getPortMarkerIcon } from '../utils/portMarkerIcon'

const SWEDEN_CENTER = [62.5, 16.5]
const SWEDEN_ZOOM = 5

function SwedenMap({ ports, onSelectPort }) {
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

      {ports.map((port) => (
        <Marker
          key={port.hamnanlaggning}
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
      ))}
    </MapContainer>
  )
}

export default SwedenMap
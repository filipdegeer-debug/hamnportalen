import L from 'leaflet'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const markerOptions = {
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
}

const customerIcons = {
  true: L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    ...markerOptions,
  }),
  false: L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    ...markerOptions,
  }),
}

export function getPortMarkerIcon(kund) {
  return customerIcons[kund]
}

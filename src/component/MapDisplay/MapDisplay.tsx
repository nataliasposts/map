import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationDto from '../../type/LocationDto';
import markerIconUrl from '../icons/marker-icon-2x.png';
import markerShadowUrl from '../icons/marker-shadow.png';
import L from 'leaflet';

type MapDisplayProps = {
  location: LocationDto;
};

const MapDisplay: React.FC<MapDisplayProps> = ({ location }) => {
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ height: '400px', width: '500px' }}
      key={location.lat + location.lng}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={location}
        icon={
          new L.Icon({
            iconUrl: markerIconUrl,
            shadowUrl: markerShadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        }
      />
    </MapContainer>
  );
};

export default MapDisplay;

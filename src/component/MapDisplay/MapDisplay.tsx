import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationDto from "../../type/LocationDto";

type MapDisplayProps = {
    location: LocationDto;
};

const MapDisplay: React.FC<MapDisplayProps> = ({ location }) => {

    return (
        <MapContainer
            center={location}
            zoom={13}
            style={{ height: "400px", width: "500px" }}
            key={location.lat + location.lng}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location} />
        </MapContainer>
    );
};

export default MapDisplay;

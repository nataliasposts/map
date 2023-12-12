import React from 'react';
import LocationDto from '../../type/LocationDto';
import MapDisplay from '../MapDisplay/MapDisplay';
import TextEnum from '../../type/enum/TextEnum';
import StyledLocationDisplay from './StyledLocationDisplay';

type LocationDisplayProps = {
  title: string;
  location: LocationDto;
  locationData: LocationDto;
};

const LocationDisplay: React.FC<LocationDisplayProps> = ({ title, location, locationData }) => {
  return (
    <StyledLocationDisplay>
      <h3>{title}</h3>
      <div className="location_row">
        <MapDisplay location={location} />
        <div className="location-text_row">
          <p>
            {TextEnum.CITY} {locationData.city}
          </p>
          <p>
            {TextEnum.COUNTRY} {locationData.country_name}
          </p>
          <p>
            {TextEnum.REGION} {locationData.region_name}
          </p>
          <p>
            {TextEnum.POSTCODE} {locationData.zip}
          </p>
        </div>
      </div>
    </StyledLocationDisplay>
  );
};

export default LocationDisplay;

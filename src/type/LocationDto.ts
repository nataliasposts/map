interface LocationDto {
  lat: number;
  lng: number;
  city?: string;
  country_name?: string;
  region_name?: string;
  zip?: string;
}

export default LocationDto;

import LocationDto from "../../type/LocationDto";

export interface LocationState {
  currentLocation: LocationDto;
  currentLocationData: LocationDto;
  searchLocation: LocationDto;
  searchLocationData: LocationDto;
  searchHistory: string[];
}

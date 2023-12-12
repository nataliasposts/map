import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocationState } from '../state/LocationState';
import LocationDto from '../../type/LocationDto';

const defaultLocation = {
  lat: 52.2297,
  lng: 21.0122
};

const defaultData = {
  lat: 0,
  lng: 0,
  city: '-',
  country_name: '-',
  region_name: '-',
  zip: '-'
};

const initialState: LocationState = {
  currentLocation: defaultLocation,
  currentLocationData: defaultData,
  searchLocation: defaultLocation,
  searchLocationData: defaultData,
  searchHistory: []
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<LocationDto>) => {
      state.currentLocation = action.payload;
    },
    setCurrentLocationData: (state, action: PayloadAction<LocationDto>) => {
      state.currentLocationData = action.payload;
    },
    setSearchLocation: (state, action: PayloadAction<LocationDto>) => {
      state.searchLocation = action.payload;
    },
    setLocationData: (state, action: PayloadAction<LocationDto>) => {
      state.searchLocationData = action.payload;
    },
    setSearchHistory: (state, action: PayloadAction<string[]>) => {
      state.searchHistory = action.payload;
    },
    cleanSearchHistory: (state) => {
      state.searchHistory = [];
    }
  }
});

export const {
  setCurrentLocation,
  setCurrentLocationData,
  setSearchLocation,
  setLocationData,
  setSearchHistory,
  cleanSearchHistory
} = locationSlice.actions;

export default locationSlice.reducer;

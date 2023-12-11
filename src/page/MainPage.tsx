import { useEffect } from "react";
import axios from "axios";
import SearchBox from "../component/SearchBox/SearchBox";
import { toast } from "react-toastify";
import StyledMainPage from "./StyledMainPage";
import { API_KEY, isValidIP } from "../component/helper/helper";
import SearchList from "../component/SearchList/SearchList";
import { RootState } from "../store";
import { useThunkAppDispatch } from "../HOK/reduxHooks";
import {
    setCurrentLocation,
    setCurrentLocationData,
    setLocationData,
    setSearchHistory,
    setSearchLocation,
} from "../store/reducer/locationReducer";
import { useSelector } from "react-redux";
import LocationDisplay from "../component/LocationDisplay/LocationDisplay";

const MainPage = () => {
    const dispatch = useThunkAppDispatch();
    const {
        currentLocation,
        currentLocationData,
        searchLocation,
        searchLocationData,
        searchHistory,
    } = useSelector((state: RootState) => state.location);

    const addToSearchHistory = (query: string) => {
        dispatch(setSearchHistory([query, ...searchHistory]));
    };

    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                dispatch(setCurrentLocation({ lat: latitude, lng: longitude }));
                try {
                    const response = await axios.get(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                    );
                    const { address } = response.data;
                    const transformedLocationData = {
                        city: address.city,
                        country_name: address.country,
                        zip: address.postcode,
                        region_name: address.state,
                        lat: latitude,
                        lng: longitude,
                    };
                    dispatch(setCurrentLocationData(transformedLocationData));
                } catch (error) {
                    toast.error(`Error getting location information: ${error}`, {
                        position: "top-right",
                    });
                }
            },
            (error) => {
                toast.error(`The error of your current location: ${error}`, {
                    position: "top-right",
                });
            },
            options,
        );
    }, []);

    const handleSearch = (query: string) => {
        if (!query) {
            return;
        }
        if (!isValidIP.test(query)) {
            toast.error(`Please write only IP-address`, {
                position: "top-right",
            });
            return;
        }
        axios
            .get(`http://api.ipstack.com/${query}?access_key=${API_KEY}`)
            .then((response) => {
                const { latitude, longitude, city, country_name, region_name, zip } =
                    response.data;
                if (latitude && longitude) {
                    dispatch(setSearchLocation({ lat: latitude, lng: longitude }));
                    dispatch(
                        setLocationData({
                            lat: latitude,
                            lng: longitude,
                            city,
                            country_name,
                            region_name,
                            zip,
                        }),
                    );
                    addToSearchHistory(query);
                } else {
                    toast.error(`This location wasn't found`, {
                        position: "top-right",
                    });
                }
            })
            .catch((error) => {
                toast.error(`The error from ipstack: ${error}`, {
                    position: "top-right",
                });
            });
    };

    return (
        <StyledMainPage>
            <div className="container main-container">
                <SearchList />
                <div className="location-wrapper">
                    <LocationDisplay
                        location={currentLocation}
                        title="Current location"
                        locationData={currentLocationData}
                    />
                    <SearchBox onSearch={handleSearch} />
                    <LocationDisplay
                        location={searchLocation}
                        title="Search location"
                        locationData={searchLocationData}
                    />
                </div>
            </div>
        </StyledMainPage>
    );
};

export default MainPage;

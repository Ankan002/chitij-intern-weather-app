import { appLoadedAtom, currentWeatherAtom } from "@/atoms";
import { useGetWeather } from "@/services/weather";
import { Weather } from "@/types/weather";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

export const useInitialWeatherManager = async () => {
	const [latitude, setLatitude] = useState<string>("");
	const [longitude, setLongitude] = useState<string>("");

	const componentMounted = useRef<boolean>(false);

	const setAppLoaded = useSetRecoilState<boolean>(appLoadedAtom);
	const setCurrentWeatherData = useSetRecoilState<Weather | null>(
		currentWeatherAtom
	);

	const { getWeather } = useGetWeather({
		lat: latitude,
		lng: longitude,
		onSuccess: (data) => {
			setCurrentWeatherData(data);
			setAppLoaded(true);
		},
		onError: (error) => {
			setAppLoaded(true);

			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log(error);
		},
	});

	useEffect(() => {
		if (latitude.length > 0 && longitude.length > 0) {
			getWeather();
		}
	}, [latitude, longitude]);

	useEffect(() => {
		if (!componentMounted.current) {
			componentMounted.current = true;

			navigator.geolocation.getCurrentPosition(
				(geoData) => {
					setLatitude(geoData.coords.latitude.toPrecision(5));
					setLongitude(geoData.coords.longitude.toPrecision(5));
				},
				(error) => {
					// TODO: Add a toast.
					setAppLoaded(true);
				}
			);
		}
	}, []);

	return {};
};

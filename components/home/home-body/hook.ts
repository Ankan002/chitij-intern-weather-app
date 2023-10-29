import { appLoadedAtom, currentWeatherAtom } from "@/atoms";
import { Weather } from "@/types/weather";
import { useRecoilValue } from "recoil";

export const useHomeBody = () => {
	const currentWeatherData = useRecoilValue<Weather | null>(
		currentWeatherAtom
	);
	const isAppLoaded = useRecoilValue<boolean>(appLoadedAtom);

	return {
		isWeatherLoading: true,
		weatherData: currentWeatherData,
	};
};

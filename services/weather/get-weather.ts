import { Weather } from "@/types/weather";
import { QueryFunctionContext, useQuery } from "react-query";

const getWeather = async ({ queryKey }: QueryFunctionContext) => {
	const [_, lat, lng, city] = queryKey;

	try {
		const response = await fetch(
			`/api/get-current-weather?lat=${lat}&lng=${lng}${
				city ? `&city=${city}` : ""
			}`,
			{
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			}
		);

		const data = await response.json();

		if (!data.success) {
			throw new Error(data?.error ?? "Some Error Occurred!!");
		}

		return data.data as Weather;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Some Error Ocurred!!");
	}
};

interface Args {
	lat: string;
	lng: string;
	city?: string;
	onSuccess?: (data: Weather) => void;
	onError?: (error: unknown) => void;
}

export const useGetWeather = (args: Args) => {
	const { lat, lng, city, onError, onSuccess } = args;

	const { data, isLoading, refetch } = useQuery(
		["get-weather", lat, lng, city],
		getWeather,
		{
			retry: false,
			enabled: false,
			onError,
			onSuccess,
		}
	);

	return {
		weather: data,
		isWeatherLoading: isLoading,
		getWeather: refetch,
	};
};

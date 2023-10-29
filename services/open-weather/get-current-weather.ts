interface Args {
	lat: string;
	lng: string;
}

export const getCurrentWeather = async (args: Args) => {
	try {
		const response = await fetch(
			`${process.env["OPEN_WEATHER_URL"]}?lat=${args.lat}&lon=${args.lng}&appid=${process.env["OPEN_WEATHER_API_KEY"]}`,
			{
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			}
		);

        const data = await response.json();

        return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Some Error Occurred!!");
	}
};

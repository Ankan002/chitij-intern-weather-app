"use client";

import { Weather } from "@/types/weather";

interface Props {
	weatherData: Weather;
}

const RestDataSection = (props: Props) => {
	const { weatherData } = props;

	return (
		<div className="w-full flex-1 min-h-[200px] flex md:flex-row flex-col mt-8">
			<div className="flex-1 w-full min-h-[150px] md:mr-2 flex flex-col">
				<div className="w-full flex-1 bg-primary-gray border border-primary-dark rounded-md px-5 py-2">
					<p className="font-muli text-xl text-primary-dark font-bold">
						{weatherData.weather[0].main}
					</p>

					<p className="font-muli text-lg text-primary-dark mt-1">
						{weatherData.weather[0].description}
					</p>

					<hr className="w-full border-t-primary-dark mt-2" />

					<p className="font-muli text-lg text-primary-dark mt-4">
						Min Temperature:{" "}
						{(weatherData.main.temp_min - 273).toPrecision(4)} °C
					</p>
					<p className="font-muli text-lg text-primary-dark mt-1">
						Max Temperature:{" "}
						{(weatherData.main.temp_max - 273).toPrecision(4)} °C
					</p>
					<p className="font-muli text-lg text-primary-dark mt-1">
						Atmospheric Pressure:{" "}
						{weatherData.main.pressure.toPrecision(4)} hPa
					</p>
				</div>

				<div className="w-full flex mt-2 h-20 items-center justify-between px-2 bg-primary-dark rounded-md">
					<div className="flex-1 flex flex-col items-start justify-center">
						<p className="font-muli text-sm text-primary-light">
							Wind Degree
						</p>
						<p className="font-muli font-semibold text-lg text-primary-light">
							{weatherData.wind.deg} °
						</p>
					</div>

					<div className="flex-1 flex flex-col items-end justify-center">
						<p className="font-muli text-sm text-end text-primary-light">
							Feels Like
						</p>
						<p className="font-muli font-semibold text-lg text-primary-light text-end">
							{(weatherData.main.feels_like - 273).toPrecision(4)}{" "}
							°C
						</p>
					</div>
				</div>
			</div>
			<div className="flex-1 w-full bg-primary-gray md:ml-2 md:mt-0 mt-3 border border-primary-dark rounded-md px-5 py-2">
				<p className="font-muli text-2xl text-primary-dark font-bold">
					More Details
				</p>

				<hr className="w-full border-t-primary-dark mt-2" />

				<p className="font-muli text-lg text-primary-dark mt-4">
					<span className="font-bold">
						Atmospheric Pressure (Sea Level)
					</span>
					: {weatherData.main.sea_level?.toPrecision(4) ?? "None"}{" "}
					{weatherData.main.sea_level?.toPrecision(4) ? "hPa" : ""}
				</p>

				<p className="font-muli text-lg text-primary-dark mt-1">
					<span className="font-bold">
						Atmospheric Pressure (Ground Level)
					</span>
					: {weatherData.main.grnd_level?.toPrecision(4) ?? "None"}{" "}
					{weatherData.main.grnd_level?.toPrecision(4) ? "hPa" : ""}
				</p>

				<p className="font-muli text-lg text-primary-dark mt-1">
					<span className="font-bold">Sunrise</span>:{" "}
					{new Date(weatherData.sys.sunrise * 1000).toTimeString()}
				</p>

				<p className="font-muli text-lg text-primary-dark mt-1">
					<span className="font-bold">Sunset</span>:{" "}
					{new Date(weatherData.sys.sunrise * 1000).toTimeString()}
				</p>

				<p className="font-muli text-lg text-primary-dark mt-1">
					<span className="font-bold">Latitude</span>:{" "}
					{weatherData.coord.lat}
				</p>

				<p className="font-muli text-lg text-primary-dark mt-1">
					<span className="font-bold">Longitude</span>:{" "}
					{weatherData.coord.lon}
				</p>
			</div>
		</div>
	);
};

export default RestDataSection;

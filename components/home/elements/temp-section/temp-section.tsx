"use client";

import { Weather } from "@/types/weather";
import { FaLocationDot, FaDroplet } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";

interface Props {
	weatherData: Weather;
}

const TempSection = (props: Props) => {
	const { weatherData } = props;

	return (
		<div className="w-full flex flex-col h-96 bg-mainBg rounded-lg bg-no-repeat bg-cover bg-center">
			<div className="w-full flex-1 flex md:flex-row flex-col bg-primary-dark/70 rounded-lg p-5 text-primary-light">
				<div className="flex-1 w-full flex flex-col justify-end">
					<p className="text-7xl font-muli tracking-wide">
						{(weatherData.main.temp - 273).toPrecision(3)} °
					</p>

					<div className="w-full flex items-center mt-3">
						<FaLocationDot size={23} />
						<p className="font-muli text-xl ml-1 tracking-wide">
							{weatherData.name}
						</p>
					</div>
				</div>

				<div className="md:flex-1 md:h-full h-fit w-full flex flex-col md:items-end justify-end">
					<div className="flex items-center md:mt-0 mt-3">
						<FiWind size={23} />
						<p className="font-muli text-xl ml-1 tracking-wide w-fit">
							{weatherData.wind.speed} m/s
						</p>
					</div>
					<div className="flex items-center mt-3">
						<FaDroplet size={23} />
						<p className="font-muli text-xl ml-1 tracking-wide w-fit">
							{weatherData.main.humidity} %
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TempSection;

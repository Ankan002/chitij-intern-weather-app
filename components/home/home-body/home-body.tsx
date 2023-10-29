"use client";

import { HomeBodySkeleton } from "../elements";
import { useHomeBody } from "./hook";
import Skeleton from "react-loading-skeleton";

const HomeBody = () => {
	const { isWeatherLoading, weatherData } = useHomeBody();

	return (
		<div className="w-full flex-1 flex flex-col items-center justify-center px-5 py-3">
			<div className="w-full max-w-[1300px] flex-1 flex flex-col">
				{isWeatherLoading ? (
					<HomeBodySkeleton />
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default HomeBody;

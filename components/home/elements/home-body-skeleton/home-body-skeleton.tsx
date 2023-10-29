"use client";

import Skeleton from "react-loading-skeleton";

const HomeBodySkeleton = () => {
	return (
		<>
			<Skeleton
				className="h-96 border border-primary-dark bg-primary-gray"
				width="100%"
				highlightColor="#FFFFFF"
			/>

			<div className="w-full min-h-[250px] mt-10 flex-1 flex md:flex-row flex-col">
				<div className="w-full flex-1 flex flex-col bg-primary-light md:mr-1 mr-0">
					<Skeleton
						className="h-40 border border-primary-dark bg-primary-gray"
						width="100%"
						highlightColor="#FFFFFF"
					/>

					<Skeleton
						className="h-10 border border-primary-dark bg-primary-gray mt-2"
						width="100%"
						highlightColor="#FFFFFF"
					/>
				</div>

				<div className="flex-1 h-full flex flex-col md:ml-1 ml-0">
					<Skeleton
						className="h-52 border border-primary-dark bg-primary-gray md:mt-0 mt-2"
						width="100%"
						highlightColor="#FFFFFF"
					/>
				</div>
			</div>
		</>
	);
};

export default HomeBodySkeleton;

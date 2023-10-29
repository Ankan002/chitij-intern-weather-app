import { getCurrentWeather } from "@/services/open-weather";
import { getRedisClient } from "@/utils/redis";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const GetRequestQuerySchema = z.object({
	lat: z.string().min(1),
	lng: z.string().min(1),
	city: z.string().nullable().optional(),
});

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;

	const queryParams = {
		lat: searchParams.get("lat"),
		lng: searchParams.get("lng"),
		city: searchParams.get("city"),
	};

	const queryValidationResult = GetRequestQuerySchema.safeParse(queryParams);

	if (!queryValidationResult.success) {
		console.log(queryValidationResult.error);
		return new NextResponse(
			JSON.stringify({
				success: false,
				error: queryValidationResult.error.errors[0].message,
			}),
			{
				status: 400,
			}
		);
	}

	const { lat, lng, city } = queryValidationResult.data;

	try {
		const redisClient = getRedisClient();

		const weatherCityData = city ? await redisClient.get(city) : null;

		if (weatherCityData) {
			return new NextResponse(
				JSON.stringify({
					success: true,
					data: weatherCityData,
				}),
				{
					status: 200,
				}
			);
		}

		const weatherLatLngData = await redisClient.get(`${lat}${lng}`);

		if (weatherLatLngData) {
			return new NextResponse(
				JSON.stringify({
					success: true,
					data: weatherLatLngData,
				}),
				{
					status: 200,
				}
			);
		}

		const weatherData = await getCurrentWeather({
			lat,
			lng,
		});

		if (city) {
			await redisClient.setex(city, 15 * 60, weatherData);
		} else {
			await redisClient.setex(`${lat}${lng}`, 15 * 60, weatherData);
		}

		return new NextResponse(
			JSON.stringify({
				success: true,
				data: weatherData,
			}),
			{
				status: 200,
			}
		);
	} catch (error) {
		if (error instanceof Error) {
			return new NextResponse(
				JSON.stringify({
					success: false,
					error: error.message,
				}),
				{
					status: 400,
				}
			);
		}

		return new NextResponse(
			JSON.stringify({
				success: false,
				error: "Internal Server Error!!",
			}),
			{
				status: 500,
			}
		);
	}
};

export const revalidate = 0;

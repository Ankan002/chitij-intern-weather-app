import { Redis } from "@upstash/redis";

const RedisClient = {
	client: new Redis({
		url: process.env["REDIS_URI"] ?? "",
		token: process.env["REDIS_TOKEN"] ?? "",
	}),
};

export const getRedisClient = () => RedisClient.client;

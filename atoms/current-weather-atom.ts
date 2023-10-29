import { Weather } from "@/types/weather";
import { atom } from "recoil";

export const currentWeatherAtom = atom<Weather | null>({
	key: "currentWeatherAtom",
	default: null,
});

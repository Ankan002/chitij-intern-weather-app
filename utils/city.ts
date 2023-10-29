import { join } from "node:path";
import { readFileSync } from "node:fs";
import { cwd } from "node:process";

export class City {
	private static cities: Array<City>;

	private constructor() {}

	static getCities = (): Array<City> => {
		if (!this.cities) {
			const jsonData = readFileSync(
				join(cwd(), "/constants/city-data.json")
			);

			const cityData = JSON.parse(jsonData.toString());

			this.cities = cityData;
		}

		return this.cities;
	};
}

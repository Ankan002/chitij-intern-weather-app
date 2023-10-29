import { atom } from "recoil";

export const appLoadedAtom = atom<boolean>({
	key: "appLoadedAtom",
	default: false,
});

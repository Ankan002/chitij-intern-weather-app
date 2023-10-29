import { atom } from "recoil";

const appLoadedAtom = atom<boolean>({
	key: "appLoadedAtom",
	default: false,
});

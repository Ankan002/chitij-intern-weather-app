import { Navbar } from "@/components/common";
import { HomeBody } from "@/components/home";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col bg-primary-light pt-10">
				<HomeBody />
			</main>
		</>
	);
}

import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { ReactQueryProvider, RecoilProvider } from "@/components/providers";
import { InitialWeatherManager } from "@/components/common";

export const metadata: Metadata = {
	title: "WetP",
	description: "A simple weather predictor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<RecoilProvider>
					<ReactQueryProvider>
						<InitialWeatherManager />
						{children}
					</ReactQueryProvider>
				</RecoilProvider>
			</body>
		</html>
	);
}

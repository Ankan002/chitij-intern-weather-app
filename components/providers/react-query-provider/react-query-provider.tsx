"use client";

import { getQueryClient } from "@/utils/react-query-client";
import { QueryClientProvider } from "react-query";

interface Props {
	children: React.ReactNode;
}

const ReactQueryProvider = (props: Props) => {
	const { children } = props;

	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;

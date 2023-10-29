import { QueryClient } from "react-query";

const ReactQueryClient = {
    client: new QueryClient(),
}

export const getQueryClient = () => ReactQueryClient.client;

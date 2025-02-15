import { getCookie } from '@/utils/session';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "http://localhost:3001/api";

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers) => {
		const token = getCookie("accessToken");
		if (token) {
			headers.set("token", token);
		}

		return headers;
	},
});

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery,
	tagTypes: ["PROFILE", "CAT"],
	endpoints: () => ({}),
});

export default baseApi;
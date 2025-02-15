import { toQueryStrings } from "@/utils/helpers";
import baseApi from "../base-api";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchUserList: builder.query({
			query: (query = {}) => `/user${toQueryStrings(query)}`,
			transformResponse: (res) => res.data,
			providesTags: ['USER'],
		}),
		fetchUserById: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['USER'],
		}),
	}),
	// overrideExisting: false,
});

export const { useFetchUserListQuery, useFetchUserByIdQuery } = authApi;
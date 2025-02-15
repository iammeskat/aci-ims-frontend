import { toQueryString } from "src/utils/helper";
import baseApi from "../base-api";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchCourses: builder.query({
			query: (query = {}) => `/course${toQueryString(query)}`,
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

export const { useFetchCoursesQuery, useFetchUserByIdQuery } = authApi;
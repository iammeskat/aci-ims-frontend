import baseApi from "../base-api";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (payload) => ({
				url: `/auth/login`,
				method: 'POST',
				body: payload,
			}),
		}),
		fetchProfile: builder.query({
			query: (id) => `/auth/profile`,
			providesTags: ['PROFILE'],
		}),
		updateProfile: builder.mutation({
			query: (payload) => ({
				url: `/auth/profile`,
				method: 'PATCH',
				body: payload,
			}),
		}),
	}),
	// overrideExisting: false,
});

export const { useLoginMutation, useFetchProfileQuery, useUpdateProfileMutation } = authApi;
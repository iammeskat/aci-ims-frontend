import { toQueryStrings } from "@/utils/helpers";
import baseApi from "../base-api";

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

		fetchUserList: builder.query({
			query: (query = {}) => `/user${toQueryStrings(query)}`,
			transformResponse: res => res.data,
			providesTags: ['USER'],
		}),

		fetchUser: builder.query({
			query: (id) => `/user/${id}`,
			providesTags: ['USER'],
		}),

		createUser: builder.mutation({
			query: (payload) => ({
				url: `/user`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['USER']
		}),

		updateUser: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/user/${id}`,
				method: 'PATCH',
				body: payload,
			}),
			invalidatesTags: ['USER']
		}),

		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/user/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['USER']
		}),

	}),
	// overrideExisting: false,
});

export const {
	useFetchUserListQuery,
	useFetchUserQuery,
	useCreateUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation
} = userApi;
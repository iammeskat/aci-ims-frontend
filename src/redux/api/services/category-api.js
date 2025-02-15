import { toQueryStrings } from "@/utils/helpers";
import baseApi from "../base-api";

export const categoryApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

		fetchCategoryList: builder.query({
			query: (query = {}) => `/category${toQueryStrings(query)}`,
			transformResponse: res => res.data,
			providesTags: ['CAT'],
		}),

		fetchCategory: builder.query({
			query: (id) => `/category/${id}`,
			providesTags: ['CAT'],
		}),

		createCategory: builder.mutation({
			query: (payload) => ({
				url: `/category`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['CAT']
		}),

		updateCategory: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/category/${id}`,
				method: 'PATCH',
				body: payload,
			}),
			invalidatesTags: ['CAT']
		}),

		deleteCategory: builder.mutation({
			query: (id) => ({
				url: `/category/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['CAT']
		}),

	}),
	// overrideExisting: false,
});

export const {
	useFetchCategoryListQuery,
	useFetchCategoryQuery,
	useCreateCategoryMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation
} = categoryApi;
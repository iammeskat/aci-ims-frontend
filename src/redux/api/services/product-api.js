import { toQueryStrings } from "@/utils/helpers";
import baseApi from "../base-api";

export const ProductApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

		fetchProductList: builder.query({
			query: (query = {}) => `/product${toQueryStrings(query)}`,
			transformResponse: res => res.data,
		}),

		fetchProduct: builder.query({
			query: (id) => `/product/${id}`,
		}),

		createProduct: builder.mutation({
			query: (payload) => ({
				url: `/product`,
				method: 'POST',
				body: payload,
			}),
		}),

		updateProduct: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/product/${id}`,
				method: 'PATCH',
				body: payload,
			}),
		}),

		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/product/${id}`,
				method: 'DELETE',
			}),
		}),

	}),
	// overrideExisting: false,
});

export const {
	useFetchProductListQuery,
	useFetchProductQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} = ProductApi;
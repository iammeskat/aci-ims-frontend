import { useFetchCategoryListQuery } from '@/redux/api/services/category-api';
import { useUpdateProductMutation } from '@/redux/api/services/product-api';
import { useEffect, useState } from 'react';

const useCategoryList = (count = 100) => {
	const [categories, setCategories] = useState([])
	const { data, isLoading, isFetching } = useFetchCategoryListQuery({ count, with_product: true });
	const [updateProduct, { isLoading: isMoving }] = useUpdateProductMutation();

	useEffect(() => {
		setCategories(data?.results || [])
	}, [data]);

	const moveProduct = (productId, fromCategoryId, toCategoryId) => {
		setCategories((prevCategories) => {
			const newCategories = prevCategories.map((category) => ({
				...category,
				products: category.products.map((product) => ({ ...product })),
			}));

			const fromCategory = newCategories.find((c) => c._id === fromCategoryId);
			const toCategory = newCategories.find((c) => c._id === toCategoryId);

			if (fromCategory && toCategory) {
				const productIndex = fromCategory.products.findIndex((item) => item._id === productId);

				if (productIndex !== -1) {
					const [movedProduct] = fromCategory.products.splice(productIndex, 1);
					const updatedProduct = { ...movedProduct, category: toCategoryId };
					toCategory.products.unshift(updatedProduct);
					updateProduct({ id: productId, payload: { category: toCategoryId } })
				}
			}

			return newCategories;
		});

	};

	const addProduct = (newProduct) => {
		setCategories((prevCategories) => {
			const newCategories = prevCategories.map((category) => ({
				...category,
				products: category.products.map((product) => ({ ...product })),
			}));

			const toCategory = newCategories.find((c) => (c.is_super && c.title == "uncategorized"));
			if (toCategory)
				toCategory.products.unshift(newProduct);

			return newCategories;
		});

	}


	return ({
		categories,
		setCategories,
		moveProduct,
		addProduct,
		isLoading,
		isFetching,
		isMoving
	})
}

export default useCategoryList
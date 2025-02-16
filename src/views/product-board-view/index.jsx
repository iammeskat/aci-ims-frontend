"use client"

import useCategoryList from "@/hooks/useCategoryList"
import { useState } from "react"
import CategoryKanbanBoard from "./components/categoy-kanban-board"
import ProductBoardHeader from "./components/product-board-header"
import ProductCatModals from "./components/product-cat-modals"


const ProductBoardView = () => {
	const [modal, setModal] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null)
	const { categories, setCategories, moveProduct, addProduct, isLoading } = useCategoryList();


	const handleAction = (action, item) => {
		setSelectedItem(item);
		setModal(action);
	}


	return (
		<div className="w-full flex flex-col gap-4">
			<ProductBoardHeader handleAction={handleAction} />
			<CategoryKanbanBoard
				categories={categories}
				setCategories={setCategories}
				moveProduct={moveProduct}
				handleAction={handleAction}
				isLoading={isLoading}
			/>

			<ProductCatModals
				modal={modal}
				setModal={setModal}
				setCategories={setCategories}
				data={selectedItem}
				addProduct={addProduct}
			/>
		</div>
	)
}


export default ProductBoardView;


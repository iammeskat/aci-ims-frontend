"use client"

import AddProduct from "@/components/add-product"
import CreateCategory from "@/components/create-category"
import DeleteCategory from "@/components/delete-category"
import Modal from "@/components/modal"
import useCategoryList from "@/hooks/useCategoryList"
import { useState } from "react"
import CategoryKanbanBoard from "./components/categoy-kanban-board"
import ProductBoardHeader from "./components/product-board-header"


const ProductBoardView = () => {
	const [modal, setModal] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null)
	const { categories, setCategories, moveProduct, isLoading } = useCategoryList();


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

			<Modal
				title="Add Product by Scanning Barcode"
				opened={modal === "create-product"}
				closeModal={() => setModal(null)}
				footer={false}
			>
				<AddProduct
					onCancel={() => setModal(null)}
				/>
			</Modal>

			<Modal
				title={modal == "create-category" ? "Create Category" : "Edit Category"}
				opened={["create-category", "edit-category"].includes(modal)}
				closeModal={() => setModal(null)}
				footer={false}
			>
				<CreateCategory
					data={selectedItem}
					onCancel={() => setModal(null)}
					setCategories={setCategories}
				/>
			</Modal>
			<Modal
				title="Delete Category"
				opened={modal === "delete-category"}
				closeModal={() => setModal(null)}
				footer={false}
			>
				<DeleteCategory
					data={selectedItem}
					onCancel={() => setModal(null)}
				/>
			</Modal>
		</div>
	)
}


export default ProductBoardView;


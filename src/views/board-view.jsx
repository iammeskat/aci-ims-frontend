"use client"

import AddProduct from "@/components/add-product"
import Category from "@/components/Category"
import Button from "@/components/core/button"
import DragLayer from "@/components/DragLayer"
import Modal from "@/components/modal"
import { BoxIcon } from "lucide-react"
import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { v4 as uuidv4 } from "uuid"


const BoardView = () => {
	const [openedProductModal, setOpenedProductModal] = useState(false);

	const [categories, setCategories] = useState([
		{
			id: "1",
			title: "To Do",
			cards: [
				{ id: "1", content: "Task 1" },
				{ id: "2", content: "Task 2" },
			],
		},
		{
			id: "2",
			title: "In Progress",
			cards: [{ id: "3", content: "Task 3" }],
		},
		{
			id: "3",
			title: "Done",
			cards: [{ id: "4", content: "Task 4" }],
		},
	])

	const moveCard = (cardId, fromCategoryId, toCategoryId) => {
		setCategories((prevCategories) => {
			const newCategories = [...prevCategories]
			const fromCategory = newCategories.find((c) => c.id === fromCategoryId)
			const toCategory = newCategories.find((c) => c.id === toCategoryId)

			if (fromCategory && toCategory) {
				const cardIndex = fromCategory.cards.findIndex((c) => c.id === cardId)
				if (cardIndex !== -1) {
					const [movedCard] = fromCategory.cards.splice(cardIndex, 1)
					toCategory.cards.push(movedCard)
				}
			}

			return newCategories
		})
	}

	const addCard = (categoryId, content) => {
		setCategories((prevCategories) => {
			const newCategories = [...prevCategories]
			const category = newCategories.find((c) => c.id === categoryId)
			if (category) {
				category.cards.push({ id: uuidv4(), content })
			}
			return newCategories
		})
	}

	return (
		<div className="w-full flex flex-col gap-4">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<div className="size-8 border rounded-full flex justify-center items-center">
						<BoxIcon />
					</div>
					<h1 className="text-2xl font-bold">
						Products
					</h1>
				</div>
				<div>
					<Button
						text="Add Product"
						onClick={() => setOpenedProductModal(true)}
					/>
				</div>
			</div>
			<DndProvider backend={HTML5Backend}>
				<div className="flex space-x-4 overflow-x-auto pb-4">
					{categories.map((category) => (
						<Category
							key={category.id}
							id={category.id}
							title={category.title}
							cards={category.cards}
							moveCard={moveCard}
							addCard={addCard}
						/>
					))}
				</div>
				<DragLayer />
			</DndProvider>

			<Modal
				title="Add Product by Scanning Barcode"
				opened={openedProductModal}
				closeModal={() => setOpenedProductModal(false)}
			>
				<AddProduct />
			</Modal>
		</div>
	)
}


export default BoardView;


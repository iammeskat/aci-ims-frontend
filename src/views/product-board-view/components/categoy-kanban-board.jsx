"use client"

import DragLayer from "@/components/drag-layer"
import SkeletonCatPipeline from "@/components/skeleton-cat-pipeline"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import CategoryPipeline from "./category-pipeline"


const CategoryKanbanBoard = ({
	categories = [],
	handleAction = () => { },
	moveProduct = () => { },
	isLoading = false,
}) => {

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mdx:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{isLoading &&
					<SkeletonCatPipeline count={5} />
				}
				{categories.map((category) => (
					<CategoryPipeline
						key={category._id}
						data={category}
						moveProduct={moveProduct}
						handleAction={handleAction}
					/>
				))}
			</div>
			<DragLayer />
		</DndProvider>
	)
}


export default CategoryKanbanBoard;


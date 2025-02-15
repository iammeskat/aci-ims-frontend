"use client"

import { EllipsisVerticalIcon, PenLineIcon, TrashIcon } from "lucide-react"
import { useState } from "react"
import { useDrop } from "react-dnd"
import ProductCard from "./product-card"



const CategoryPipeline = ({
	data = {},
	moveProduct = () => { },
	handleAction = () => { }
}) => {
	const { _id: id, title, products = [], is_super } = data;
	const [isOver, setIsOver] = useState(false)

	const [, drop] = useDrop({
		accept: "product",
		drop: (item) => {
			if (item.categoryId !== id) {
				moveProduct(item.id, item.categoryId, id)
			}
		},
		hover: () => setIsOver(true),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	})


	return (
		<div
			ref={drop}
			className={`w-full h-[450px] pb-2 rounded border border-slate-300 bg-sky-50 overflow-hidden transition-all duration-200 ${isOver ? "bg-gray-200" : ""}`}
		>
			<CatPipelineHeader
				title={title}
				isSuper={is_super}
				onAction={action => handleAction(action, { _id: id, title })}
			/>
			<div
				className="h-[calc(100%-25px)] p-2 space-y-2 overflow-y-auto overflow-x-hidden"
				style={{ scrollbarWidth: "thin" }}
			>
				{products.map((card) => (
					<ProductCard
						key={card._id + Math.random()}
						id={card._id}
						content={card.description}
						categoryId={id}
					/>
				))}
			</div>
		</div>
	)
}


const CatPipelineHeader = ({ title, onAction, isSuper }) => (
	<div className={`group h-8 px-2 border-b border-slate-300 bg-slate-100 flex items-center justify-center transition-all duration-300 relative ${isSuper ? "" : "hover:justify-between"}`}>
		<h2 className="font-medium capitalize">
			{title}
		</h2>
		{!isSuper &&
			<>
				<div className="hidden group-hover:flex gap-1  absolute right-2">
					<button
						onClick={() => onAction("edit-category")}
						className="size-6 border text-xs rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 hover:bg-blue-100 transition-colors duration-300"
					>
						<PenLineIcon size={16} />
					</button>
					<button
						onClick={() => onAction("delete-category")}
						className="size-6 border text-xs rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 hover:bg-red-100 transition-colors duration-300"
					>
						<TrashIcon size={16} />
					</button>
				</div>
				<EllipsisVerticalIcon className="absolute right-2 size-4 group-hover:hidden" />
			</>
		}
	</div>
)

export default CategoryPipeline;


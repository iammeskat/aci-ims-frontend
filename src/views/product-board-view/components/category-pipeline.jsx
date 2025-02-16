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
				moveProduct(item.id, item.categoryId, id);
			}
		},
		hover: (item) => {
			if (item.categoryId != id)
				setIsOver(true);
		},
		collect: (monitor) => {
			const item = monitor.getItem();
			if (item?.categoryId != id) {
				const isOver = monitor.isOver();
				setIsOver(isOver);
				return { isOver };
			}
		},
	});


	return (
		<div
			ref={drop}
			className={`w-full h-[450px] pb-2 rounded border border-slate-300 bg-sky-50 overflow-hidden transition-all duration-200 ${isOver ? "bg-gray-200 ring-1 ring-blue-600" : ""}`}
		>
			<CatPipelineHeader
				title={title}
				isSuper={is_super}
				onAction={action => handleAction(action, { _id: id, title })}
				hasProducts={products.length > 0}
			/>
			<div
				className="relative h-[calc(100%-25px)] p-2 space-y-2 overflow-y-auto overflow-x-hidden"
				style={{ scrollbarWidth: "thin" }}
			>
				{isOver && <ProductCardSkeleton />}
				{products.map((product) => (
					<ProductCard
						key={product._id}
						data={product}
						categoryId={id}
						onDelete={() => handleAction("delete-product", product)}
					/>
				))}
			</div>
		</div>
	)
}


const CatPipelineHeader = ({ title, onAction, isSuper, hasProducts }) => (
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
						className={`size-6 border text-xs rounded-full flex items-center justify-center  transition-colors duration-300 ${hasProducts ? "cursor-not-allowed opacity-60" : "hover:border-red-500 hover:text-red-500 hover:bg-red-100"}`}
						disabled={hasProducts}
						title={hasProducts ? "Cannot delete category with existing products" : ""}
					>
						<TrashIcon size={16} />
					</button>
				</div>
				<EllipsisVerticalIcon className="absolute right-2 size-4 group-hover:hidden" />
			</>
		}
	</div>
);

const ProductCardSkeleton = () => (
	<div className="sticky top-0 z-10 w-full border-b border-dashed border-slate-400 pb-2 bg-sky-50">
		<div className="w-full h-[62px] border border-slate-400 bg-slate-200 rounded" />
	</div>
)

export default CategoryPipeline;


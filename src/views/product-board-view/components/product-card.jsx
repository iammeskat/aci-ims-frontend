"use client"

import { getElementWidthById } from "@/utils/helpers";
import { GripVertical, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useDrag } from "react-dnd";


const ProductCard = ({
	data = {},
	categoryId = "",
	onDelete = () => { }
}) => {
	const { _id: id, description, barcode } = data;
	const [isHovered, setIsHovered] = useState(false)

	const [{ isDragging }, drag] = useDrag({
		type: "product",
		item: {
			id,
			categoryId,
			description,
			barcode,
			width: getElementWidthById(`${categoryId}_${id}`)
		},
		collect: (monitor) => {
			return ({
				isDragging: !!monitor.isDragging(),
			})
		},
	});




	return (
		<div
			ref={drag}
			id={`${categoryId}_${id}`}
			className={`relative group flex gap-1 bg-white p-3 w-full rounded border  cursor-move transition-all duration-200 ${isDragging ? "opacity-50 scale-95" : ""
				} ${isHovered ? "scale-105" : "scale-100"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<GripVertical className="size-4 -ml-2" />
			<div>
				<p className="text-sm font-medium">
					{description}
				</p>
				<p className="text-xs">
					Code: {barcode}
				</p>
			</div>
			<BtnProductDelete onClick={onDelete} />
		</div>
	)
}

const BtnProductDelete = ({ onClick }) => (
	<button
		onClick={onClick}
		className={`opacity-0 group-hover:opacity-100 absolute bottom-1 right-1 size-6 border text-xs rounded-full flex items-center justify-center  transition-all duration-300 hover:border-red-500 hover:text-red-500 hover:bg-red-100`}
	>
		<TrashIcon size={16} />
	</button>
)

export default ProductCard;


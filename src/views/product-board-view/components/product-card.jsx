"use client"

import { useState } from "react";
import { useDrag } from "react-dnd";


const ProductCard = ({
	data = {},
	categoryId = ""
}) => {
	const { _id: id, description, barcode } = data;
	const [isHovered, setIsHovered] = useState(false)

	const [{ isDragging }, drag] = useDrag({
		type: "product",
		item: { id, categoryId, description, barcode },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	})

	return (
		<div
			ref={drag}
			className={`bg-white p-3 w-full rounded border  cursor-move transition-all duration-200 ${isDragging ? "opacity-50 scale-95" : ""
				} ${isHovered ? "scale-105" : "scale-100"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				transform: `scale(${isDragging ? 0.95 : 1})`,
				transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
			}}
		>
			<p className="text-sm font-medium">
				{description}
			</p>
			<p className="text-xs">
				Code: {barcode}
			</p>
		</div>
	)
}

export default ProductCard;


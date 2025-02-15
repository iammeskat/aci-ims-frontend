"use client"

import { useState } from "react"
import { useDrag } from "react-dnd"


export default function NoteCard({ id, content, categoryId }) {
	const [isHovered, setIsHovered] = useState(false)

	const [{ isDragging }, drag] = useDrag({
		type: "card",
		item: { id, categoryId, content },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	})

	return (
		<div
			ref={drag}
			className={`bg-white p-3 rounded shadow cursor-move transition-all duration-200 ${isDragging ? "opacity-50 scale-95" : ""
				} ${isHovered ? "scale-105" : "scale-100"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				transform: `scale(${isDragging ? 0.95 : isHovered ? 1.05 : 1})`,
				transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
			}}
		>
			{content}
		</div>
	)
}


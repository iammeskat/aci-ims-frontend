"use client"

import { useState } from "react"
import { useDrop } from "react-dnd"
import NoteCard from "./NoteCard"



export default function Category({ id, title, cards, moveCard, addCard }) {
	const [newCardContent, setNewCardContent] = useState("")
	const [isOver, setIsOver] = useState(false)

	const [, drop] = useDrop({
		accept: "card",
		drop: (item) => {
			if (item.categoryId !== id) {
				moveCard(item.id, item.categoryId, id)
			}
		},
		hover: () => setIsOver(true),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	})

	const handleAddCard = () => {
		if (newCardContent.trim()) {
			addCard(id, newCardContent.trim())
			setNewCardContent("")
		}
	}

	return (
		<div
			ref={drop}
			className={`bg-gray-100 p-4 rounded w-72 transition-all duration-200 ${isOver ? "bg-gray-200" : ""}`}
		>
			<h2 className="text-lg font-semibold mb-4">{title}</h2>
			<div className="space-y-2">
				{cards.map((card) => (
					<NoteCard key={card.id} id={card.id} content={card.content} categoryId={id} />
				))}
			</div>
		</div>
	)
}


"use client"

import { GripVertical } from "lucide-react"
import { useDragLayer } from "react-dnd"
const layerStyles = {
	position: "fixed",
	pointerEvents: "none",
	zIndex: 100,
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
}

const getItemStyles = (initialOffset, currentOffset) => {
	if (!initialOffset || !currentOffset) {
		return {
			display: "none",
		}
	}

	const { x, y } = currentOffset

	const transform = `translate(${x}px, ${y}px)`
	return {
		transform,
		WebkitTransform: transform,
	}
}

const DragLayer = () => {
	const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		initialOffset: monitor.getInitialSourceClientOffset(),
		currentOffset: monitor.getSourceClientOffset(),
		isDragging: monitor.isDragging(),
	}));

	if (!isDragging) {
		return null
	}

	return (
		<div style={layerStyles}>
			<div style={getItemStyles(initialOffset, currentOffset)}>
				<div
					style={{ width: `${(item.width || 260) + 1}px` }}
					className="bg-white p-3 flex gap-1 rounded shadow border-2 border-blue-500 transition-transform duration-200 ease-in-out"
				>
					<GripVertical className="size-4 -ml-2" />
					<div>
						<p className="text-sm font-medium">
							{item.description}
						</p>
						<p className="text-xs">
							Code: {item.barcode}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DragLayer;


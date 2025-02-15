import Button from '@/components/core/button'
import { BoxIcon, PlusIcon } from 'lucide-react'

const ProductBoardHeader = ({ handleAction = () => { } }) => {
	return (
		<div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
			<div className="flex items-center gap-2">
				<div className="size-8 shrink-0 border rounded-full flex justify-center items-center">
					<BoxIcon />
				</div>
				<h1 className="sm:text-2xl font-bold whitespace-nowrap">
					Inventory Management
				</h1>
			</div>
			<div className="flex gap-1 ml-auto">
				<Button
					text="Category"
					icon={<PlusIcon size={16} />}
					onClick={() => handleAction("create-category")}
					outlined
					rounded
					small
				/>
				<Button
					text="Product"
					icon={<PlusIcon size={16} />}
					onClick={() => handleAction("create-product")}
					rounded
					small
				/>
			</div>
		</div>
	)
}

export default ProductBoardHeader
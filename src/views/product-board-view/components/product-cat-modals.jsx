import AddProduct from "@/components/add-product"
import CreateCategory from "@/components/create-category"
import DeleteCategory from "@/components/delete-category"
import DeleteProduct from "@/components/delete-product"
import Modal from "@/components/modal"

const titles = {
	"crete-product": "Add Product by Scanning Barcode",
	"create-category": "Create Category",
	"edit-category": "Edit Category",
	"delete-category": "Delete Category",
	"delete-product": "Delete Product"
}

const ProductCatModals = ({
	data,
	modal,
	setModal = () => { },
	setCategories = () => { },
	addProduct = () => { },
	removeProduct = () => { }
}) => {

	const renderModal = () => {
		switch (modal) {
			case "create-product":
				return (
					<AddProduct
						onCancel={() => setModal(null)}
						onAddProduct={addProduct}
					/>
				);
			case "create-category":
			case "edit-category":
				return (
					<CreateCategory
						data={data}
						onCancel={() => setModal(null)}
						setCategories={setCategories}
					/>
				);
			case "delete-category":
				return (
					<DeleteCategory
						data={data}
						onCancel={() => setModal(null)}
					/>
				);
			case "delete-product":
				return (
					<DeleteProduct
						data={data}
						onCancel={() => setModal(null)}
						removeProduct={removeProduct}
					/>
				);

			default:
				break;
		}
	}
	return (
		<>
			<Modal
				title={titles[modal]}
				opened={Boolean(modal)}
				closeModal={() => setModal(null)}
				footer={false}
			>
				{renderModal()}
			</Modal>
		</>
	)
}

export default ProductCatModals
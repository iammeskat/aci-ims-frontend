import { useAddProductByBarcodeMutation } from "@/redux/api/services/product-api";
import { useState } from "react";
import toast from "react-hot-toast";
import BarcodeScanner from "./barcode-scanner";
import Button from "./core/button";


const AddProduct = ({ onCancel = () => { } }) => {
	const [barcode, setBarcode] = useState(null);
	const [addProduct, { isLoading }] = useAddProductByBarcodeMutation();

	const handleAdd = async () => {
		const res = await addProduct({ barcode });
		if (res?.data) {
			toast.success(res.data.msg || "Success");
			onCancel();
		} else {
			toast.error(res?.error?.data?.msg);
		}
	}

	return (
		<div className="space-y-6">
			<div className="p-6 pb-0">
				<BarcodeScanner setBarcode={setBarcode} />
			</div>
			<div className="flex justify-end gap-2 border-t px-3 py-3">
				<div>
					<Button
						text="Cancel"
						onClick={onCancel}
						outlined
					/>
				</div>
				<div>
					<Button
						type="submit"
						text="Add Product"
						onClick={handleAdd}
						disabled={!barcode}
						loading={isLoading}
					/>
				</div>
			</div>
		</div>
	)
}

export default AddProduct
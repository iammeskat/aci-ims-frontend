import { useCreateCategoryMutation, useUpdateCategoryMutation } from "@/redux/api/services/category-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "./core/button";
import TextInput from "./core/text-input";

const CreateCategory = ({
	data = null,
	onCancel = () => { },
}) => {
	const [title, setTitle] = useState("");
	const [createCategory, { isLoading }] = useCreateCategoryMutation();
	const [updateCategory, { isLoading: isUpdating }] = useUpdateCategoryMutation();

	useEffect(() => {
		if (data?.title)
			setTitle(data.title)
	}, [data]);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const res = data ? await updateCategory({ id: data._id, payload: { title } })
			: await createCategory({ title });
		if (res?.data) {
			toast.success(res.data.msg);
			onCancel();
		} else {
			toast.error(res?.error?.data?.msg || "Something went wrong!")
		}
	}

	return (
		<form
			onSubmit={handleOnSubmit}
			className="flex flex-col gap-4 px-2 py-4"
		>
			<TextInput
				labelText="Title"
				placeholder="Enter category title"
				value={title}
				onChange={e => setTitle(e.target.value)}
				autoFocus
				required
			/>
			<div className="flex justify-end gap-2">
				<div>
					<Button
						type="button"
						text="Cancel"
						onClick={onCancel}
						outlined
					/>
				</div>
				<div>
					<Button
						type="submit"
						text={data ? "Update" : "Create"}
						loading={isLoading||isUpdating}
					/>
				</div>
			</div>
		</form>
	)
}

export default CreateCategory
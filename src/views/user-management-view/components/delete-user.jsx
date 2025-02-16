import Button from "@/components/core/button";
import { useDeleteUserMutation } from "@/redux/api/services/user-api";
import toast from "react-hot-toast";

const DeleteUser = ({
	data = {},
	onCancel = () => { },
}) => {
	const [deleteUser, { isLoading }] = useDeleteUserMutation();

	const handleDelete = async (e) => {
		e.preventDefault();
		const res = await deleteUser(data._id);
		if (res?.data) {
			toast.success(res.data.msg);
			onCancel();
		} else {
			toast.error(res?.error?.data?.msg || "Something went wrong!")
		}
	}

	return (
		<div className="flex flex-col gap-4 px-2 py-4">
			<p className="text-xl font-medium text-red-500">
				Are you sure to delete?
			</p>
			<div className="flex justify-end gap-2">
				<div>
					<Button
						text="Cancel"
						onClick={onCancel}
						outlined
					/>
				</div>
				<div>
					<Button
						text="Delete"
						onClick={handleDelete}
						loading={isLoading}
					/>
				</div>
			</div>
		</div>
	)
}

export default DeleteUser
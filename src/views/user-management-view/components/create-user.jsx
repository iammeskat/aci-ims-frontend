import Button from "@/components/core/button";
import TextInput from "@/components/core/text-input";
import { useCreateUserMutation, useUpdateUserMutation } from "@/redux/api/services/user-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CreateUser = ({
	data = null,
	onCancel = () => { },
}) => {
	const [formData, setFormData] = useState({});
	const [createUser, { isLoading, error: cError }] = useCreateUserMutation();
	const [updateUser, { isLoading: isUpdating, error: uError }] = useUpdateUserMutation();
	const error = data ? uError : cError;
	useEffect(() => {
		if (data)
			setFormData({
				name: data.name,
				email: data.email
			})
	}, [data]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const res = data ? await updateUser({ id: data._id, payload: formData })
			: await createUser(formData);
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
			{error?.data?.errors?.length > 0 &&
				<div className="border border-red-500 bg-red-100 text-red-500 p-4 rounded-md text-sm">
					{error.data.errors.map((item, indx) => (
						<p key={indx}>
							{item}
						</p>
					))}
				</div>
			}
			<TextInput
				labelText="Name"
				placeholder="Enter name"
				name="name"
				value={formData.name}
				onChange={handleOnChange}
				autoFocus
				required
			/>
			<TextInput
				type="email"
				labelText="Email"
				placeholder="Enter email"
				name="email"
				value={formData.email}
				onChange={handleOnChange}
				disabled={data?.role === 1}
				required
			/>
			{!data &&
				<>
					<TextInput
						type="password"
						labelText="Password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={handleOnChange}
						required
					/>
					<TextInput
						type="password"
						labelText="Confirm Password"
						placeholder="Confirm password"
						name="confirm_password"
						value={formData.confirm_password}
						onChange={handleOnChange}
						required
					/>
				</>
			}
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
						loading={isLoading || isUpdating}
					/>
				</div>
			</div>
		</form>
	)
}

export default CreateUser
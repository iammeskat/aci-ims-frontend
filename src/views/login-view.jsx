"use client";
import Button from "@/components/core/button";
import TextInput from "@/components/core/text-input";
import Logo from "@/components/logo";
import { useLoginMutation } from "@/redux/api/services/auth-api";
import { setUserCookies } from "@/utils/session";
import { useState } from "react";
import toast from "react-hot-toast";


export const LoginView = () => {
	const [formData, setFormData] = useState({});
	const [login, { isLoading }] = useLoginMutation();
	const [fakeLoading, setIsFakeLoading] = useState(false);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		setIsFakeLoading(true);
		const res = await login(formData);
		if (res.data?.data?.token) {
			setUserCookies(res.data.data.token);
			toast.success(res?.data?.msg || "Success!");
			window.location.replace("/");
		} else {
			setIsFakeLoading(false);
			toast.error(res?.error?.data?.msg || "Something went wrong!");
		}
	}

	return (
		<div className="w-full min-h-screen flex justify-center items-center p-4 bg-slate-200">
			<div className="w-full max-w-96  mb-16 space-y-4">
				<div className="w-fit mx-auto">
					<Logo large />
				</div>
				<div className="w-full flex flex-col gap-4 p-8 rounded-md bg-white">
					<h3 className="font-extrabold text-xl">
						Login to Shwapno IMS
					</h3>
					<form
						onSubmit={handleOnSubmit}
						className="w-full flex flex-col gap-4"
					>
						<TextInput
							type="email"
							labelText="Email"
							placeholder="Enter your email"
							name="email"
							value={formData.email}
							onChange={handleOnChange}
							required
							autoFocus
						/>
						<TextInput
							type="password"
							labelText="Password"
							placeholder="Enter your password"
							name="password"
							value={formData.password}
							onChange={handleOnChange}
							required
						/>
						<Button
							type="submit"
							text="Login"
							icon=""
							loading={isLoading || fakeLoading}
						/>
					</form>
				</div>

			</div>
		</div>
	)
}

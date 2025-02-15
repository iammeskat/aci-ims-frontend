import { removeUserCookies } from "@/utils/session";

const BtnLogout = () => {

	const handleLogout = () => {
		removeUserCookies();
		window.location.replace("/login");
	}

	return (
		<button
			onClick={handleLogout}
			className="w-full h-6 px-6 border flex justify-center items-center rounded-full text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
		>
			Logout
		</button>
	)
}

export default BtnLogout
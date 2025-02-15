import { removeUserCookies } from "@/utils/session";
import Button from "./core/button";

const BtnLogout = () => {

	const handleLogout = () => {
		removeUserCookies();
		window.location.replace("/login");
	}

	return (
		<Button
			text="Logout"
			onClick={handleLogout}
			outlined
			rounded
			small
		/>
	)
}

export default BtnLogout
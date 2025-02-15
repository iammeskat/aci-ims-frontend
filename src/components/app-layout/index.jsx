"use-client";

import AppNavbar from "./app-navbar";

const AppLayout = ({ children }) => {
	return (
		<div className="w-full flex flex-col">
			<AppNavbar />
			<div className="container py-4">
				<div className=" min-h-[calc(100vh-88px)] overflow-y-auto bg-white rounded-md p-4">
					{children}
				</div>
			</div>
		</div>
	)
}

export default AppLayout
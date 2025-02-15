import ReduxProvider from "@/redux/redux-provider";
import "./globals.css";

export const metadata = {
	title: "Shwapno-Inventory Management System",
	description: "Shwapno-Inventory Management System by Meskatul Islam",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ReduxProvider>
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}

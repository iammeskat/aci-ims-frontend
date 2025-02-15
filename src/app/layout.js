import "./globals.css";

export const metadata = {
	title: "Shwapno-Inventory Management System",
	description: "Shwapno-Inventory Management System by Meskatul Islam",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}

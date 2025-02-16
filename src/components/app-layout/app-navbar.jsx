"use client";
import Link from "next/link";
import BtnLogout from "../btn-logout";
import Logo from "../logo";

const AppNavbar = () => {
	const navItems = [
		// {
		// 	path: "#",
		// 	label: "Product"
		// },
		{
			path: "/users",
			label: "User Management"
		},
	];

	return (
		<div className="sticky top-0 flex items-center  h-14 bg-white border-b z-10">
			<div className="container ">
				<div className="w-full flex items-center justify-between ">
					<Logo responsive />
					<ul className="flex items-center gap-4">
						{navItems.map((item, indx) => (
							<li key={indx}>
								<NavItem
									path={item.path}
									label={item.label}
								/>
							</li>
						))}
						<li>
							<BtnLogout />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const NavItem = ({ label = "", path = "#" }) => (
	<Link href={path}>
		<span
			className="uppercase  text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
			title="Coming soon"
		>
			{label}
		</span>
	</Link>
)

export default AppNavbar
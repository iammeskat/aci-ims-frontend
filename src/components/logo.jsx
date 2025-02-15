
const Logo = ({ large = false, responsive }) => {
	return (
		<div className="h-fit flex items-center gap-1">
			<img
				className={`w-auto ${large ? "h-14 rounded-md" : "h-8 rounded"}`}
				src="https://www.shwapno.com/images/shwapno_logo.png"
			/>
			<div className={responsive ? "hidden s456:block" : ""}>
				<p className={large ? "text-xl leading-6 font-extrabold" : "leading-4 font-bold"}>
					Inventory <br /> Management System
				</p>
			</div>
		</div>
	)
}

export default Logo
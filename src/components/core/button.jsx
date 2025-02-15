
const Button = ({ text, icon, ...props }) => {
	return (
		<button
			className="w-full h-[38px] px-8 border flex justify-center items-center rounded-md font-medium text-white bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
			{...props}
		>
			{text}
		</button>
	)
}

export default Button
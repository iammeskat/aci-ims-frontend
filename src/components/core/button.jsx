import { Loader2Icon } from "lucide-react"

const Button = ({ text, icon, loading, disabled, small = false, rounded, outlined = false, ...props }) => {
	return (
		<button
			className={`w-full ${small ? "h-6 px-6  text-sm" : "h-[38px] px-8"} ${rounded ? "rounded-full" : " rounded-md"}  border flex justify-center items-center gap-1 font-medium transition-colors duration-300 ${outlined ? "text-blue-700 border-blue-700" : "text-white bg-blue-700"}   ${(disabled || loading) ? "opacity-60" : `opacity-100 ${outlined ? "hover:bg-blue-100" : "hover:bg-blue-600"}`}`}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? (
				<Loader2Icon className="size-5 animate-spin" />
			) : (
				icon
			)
			}
			<span>
				{text}
			</span>
		</button>
	)
}

export default Button
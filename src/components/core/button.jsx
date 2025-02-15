import { Loader2Icon } from "lucide-react"

const Button = ({ text, icon, loading, disabled, ...props }) => {
	return (
		<button
			className={`w-full h-[38px] px-8 border flex justify-center items-center gap-1 rounded-md font-medium transition-colors duration-300 text-white bg-blue-700   ${(disabled || loading) ? "opacity-60" : "opacity-100 hover:bg-blue-600"}`}
			disabled={disabled || loading}
			{...props}
		>
			{loading &&
				<Loader2Icon className="size-5 animate-spin" />
			}
			<span>
				{text}
			</span>
		</button>
	)
}

export default Button
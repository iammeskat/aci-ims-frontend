
const TextInput = ({
	id = "",
	labelText = "",
	name = "",
	value = "",
	onChange = () => { },
	required = false,
	...props
}) => {
	const elementId = id || labelText.replaceAll(" ", "_")
	return (
		<div className="w-full flex flex-col">
			{labelText &&
				<label htmlFor={elementId}>
					{labelText} {required && <sup className="text-red-500">*</sup>}
				</label>
			}
			<input
				id={elementId}
				name={name}
				value={value}
				onChange={onChange}
				className="px-2 py-1.5 rounded-md border border-slate-200 focus:outline-0 focus:border-blue-700 transition-colors duration-300"
				required={required}
				{...props}
			/>
		</div>
	)
}

export default TextInput;

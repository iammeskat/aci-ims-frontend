import { XIcon } from 'lucide-react';

const Modal = ({
	opened = false,
	closeModal = () => { },
	onOk = () => { },
	onCancel = () => { },
	okBtnText = "Ok",
	cancelBtnText = "Cancel",
	title = "",
	children,
	footer = true,
	width = "350px"
}) => {
	const handleCancel = () => {
		onCancel();
		closeModal();
	}
	return (
		<div
			className={` w-screen h-screen p-4 flex justify-center items-center fixed top-0 left-0 ${opened ? "backdrop-blur-sm bg-slate-900/50 z-20" : "backdrop-blur-0 bg-transparent pointer-events-none"} transition-all duration-300`}
		>
			{opened &&
				<div
					className="w-full flex flex-col justify-between rounded-md bg-white text-slate-950"
					style={{ maxWidth: width }}
				>
					<div className="h-8 flex items-center px-2 w-full relative border-b">
						<p className='font-medium '>
							{title}
						</p>
						<button
							onClick={closeModal}
							className="size-6 border text-xs rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 hover:bg-red-100 absolute right-1 top-1 transition-colors duration-300"
						>
							<XIcon size={18} />
						</button>
					</div>
					<div
						style={{ scrollbarWidth: "thin" }}
						className="w-full max-h-[calc(100vh-300px)] overflow-y-auto"
					>
						{children}
					</div>
					{footer &&
						<div className="flex justify-end items-center gap-2 mt-auto p-2 border-t">
							<button
								onClick={handleCancel}
								className={`py-1 px-3 bg-slate-100 hover:bg-slate-200 text-blue-600 rounded text-sm transition-colors duration-300`}
							>
								{cancelBtnText}
							</button>
							<button
								onClick={onOk}
								className={`py-1 px-3 bg-blue-700 hover:bg-blue-600 text-white rounded text-sm transition-colors duration-300`}
							>
								{okBtnText}
							</button>
						</div>
					}
				</div>
			}
		</div>
	)
}

export default Modal
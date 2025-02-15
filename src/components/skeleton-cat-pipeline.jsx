
const SkeletonCatPipeline = ({ count = 1 }) => {
	return (Array(count).fill(0).map((item, indx) => (
		<div
			key={indx}
			className={`w-full h-[450px] pb-2 rounded border border-slate-300 bg-sky-50 overflow-hidden`}
		>
			<div className="h-[25px] px-2 border-b border-slate-300 bg-slate-100 flex items-center justify-center">
				<div className="h-4 w-[60%] bg-slate-300 rounded-full animate-pulse" />
			</div>
			<div className="h-[calc(100%-25px)] p-2 space-y-2">
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div
						key={indx + "_" + item}
						className={`w-full h-14 bg-slate-300 p-3 rounded border animate-pulse`}
					/>
				))}
			</div>
		</div>
	)))
}

export default SkeletonCatPipeline
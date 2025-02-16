import { PenLineIcon, TrashIcon } from "lucide-react"
import moment from "moment"

const UserListTable = ({
	users = [],
	onAction = () => { }
}) => {
	return (

		<div class="relative overflow-x-auto sm:rounded-lg border">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50">
					<tr className="border-b">
						<th scope="col" class="px-6 py-3">
							User Name
						</th>
						<th scope="col" class="px-6 py-3">
							Email
						</th>
						<th scope="col" class="px-6 py-3">
							Role
						</th>
						<th scope="col" class="px-6 py-3">
							Created At
						</th>
						<th scope="col" class="px-6 py-3 text-end">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item, indx) => (
						<tr
							key={indx}
							class="odd:bg-white even:bg-gray-50 border-b border-gray-200"
						>
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								{item.name}
							</th>
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								{item.email}
							</th>
							<td class="px-6 py-4">
								{item.role === 1 ? "Super Admin" : "Admin"}
							</td>
							<td class="px-6 py-4">
								{moment(item.createdAt).format("DD-MM-YYYY, hh:mm a")}
							</td>
							<td class="px-6 py-4">
								<div className="flex justify-end gap-1 ">
									<button
										onClick={() => onAction("edit", item)}
										className="size-6 border text-xs rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 hover:bg-blue-100 transition-colors duration-300"
									>
										<PenLineIcon size={16} />
									</button>
									<button
										onClick={() => onAction("delete", item)}
										className={`size-6 border text-xs rounded-full flex items-center justify-center  transition-colors duration-300 ${item.role === 1 ? "cursor-not-allowed opacity-60" : "hover:border-red-500 hover:text-red-500 hover:bg-red-100"}`}
										disabled={item.role === 1}
										title={item.role === 1 ? "Cannot delete super admin" : ""}
									>
										<TrashIcon size={16} />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>

	)
}

export default UserListTable
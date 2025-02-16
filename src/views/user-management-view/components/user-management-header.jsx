import Button from '@/components/core/button'
import { UserRoundPlusIcon, UsersRoundIcon } from 'lucide-react'

const UserManagementHeader = ({ handleAction = () => { } }) => {
	return (
		<div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
			<div className="flex items-center gap-2">
				<div className="size-8 shrink-0 border rounded-full flex justify-center items-center">
					<UsersRoundIcon />
				</div>
				<h1 className="sm:text-2xl font-bold whitespace-nowrap">
					User Management
				</h1>
			</div>
			<div className="flex gap-1 ml-auto">

				<Button
					text="User"
					icon={<UserRoundPlusIcon size={16} />}
					onClick={() => handleAction("create")}
					rounded
					small
				/>
			</div>
		</div>
	)
}

export default UserManagementHeader
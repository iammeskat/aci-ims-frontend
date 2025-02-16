"use client"

import { useFetchUserListQuery } from "@/redux/api/services/user-api";
import { useState } from "react";
import UserListTable from "./components/user-list-table";
import UserManagementHeader from "./components/user-management-header";
import UserModals from "./components/user-modals";


const UserManagementView = () => {
	const [modal, setModal] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null);
	const { data, isLoading } = useFetchUserListQuery({ count: 100, page: 1 });


	const handleAction = (action, item) => {
		setSelectedItem(item);
		setModal(action);
	}


	return (
		<div className="w-full flex flex-col gap-4">
			<UserManagementHeader handleAction={handleAction} />
			<UserListTable
				users={data?.results}
				onAction={handleAction}
			/>
			<UserModals
				modal={modal}
				setModal={setModal}
				data={selectedItem}
			/>
		</div>
	)
}


export default UserManagementView;


import Modal from "@/components/modal"
import CreateUser from "./create-user"
import DeleteUser from "./delete-user"

const titles = {
	"create": "Create User",
	"edit": "Edit User",
	"delete": "Delete User",
}

const UserModals = ({
	data,
	modal,
	setModal = () => { },
}) => {

	const renderModal = () => {
		switch (modal) {
			case "create":
			case "edit":
				return (
					<CreateUser
						data={data}
						onCancel={() => setModal(null)}
					/>
				);
			case "delete":
				return (
					<DeleteUser
						data={data}
						onCancel={() => setModal(null)}
					/>
				);

			default:
				break;
		}
	}
	return (
		<>
			<Modal
				title={titles[modal]}
				opened={Boolean(modal)}
				closeModal={() => setModal(null)}
				footer={false}
			>
				{renderModal()}
			</Modal>
		</>
	)
}

export default UserModals
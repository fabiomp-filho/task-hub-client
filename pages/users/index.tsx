import DynamicTable from "@/components/table/DynamicTable";
import {useEffect, useState} from "react";
import {UserService} from "@/services/UserService";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import FormModal from "@/components/modal/FormModal";
import DynamicFormModal from "@/components/form/DynamicFormModal";
import {fields} from "@/components/pages/users/create"
import {validation} from "@/components/pages/users/validation"
import {columns} from "@/components/pages/users/columns";
import {useNotification} from "@/components/contexts/NotificationProvider";
import Modal from "@/components/modal/Modal";
import DynamicBody from "@/components/viewBody/DynamicBody";
import {useRouter} from "next/router";

const Users = () => {

    const router = useRouter();
    const [entity, setEntity] = useState(null);
    const {addNotification} = useNotification();
    const [createModal, setCreateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [entities, setEntities] = useState([]);
    const [pagination, setPagination] = useState({
        size: 10,
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,
    });

    useEffect(() => {

        if (pagination.currentPage >= 0 && pagination.size > 0) {
            setLoading(true);
            fetchEntities();
        }

    }, [pagination.currentPage]);

    const fetchEntities = () => {
        UserService.getAllUsers(pagination.currentPage, pagination.size)
            .then(response => {
                setEntities(response.content)
                setPagination(prev => ({
                    ...prev,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements,
                }));
            }).catch(() => {

        }).finally(() => {
            setLoading(false);
        })
    }
    const onSubmit = (data) => {
        setLoading(true);

        UserService.createUser(data).then(() => {
            addNotification({
                message: "User succesfully created!",
                type: "success"
            })
            setCreateModal(false);
        })
            .catch(() => {
            }).finally(() => {
            setLoading(false);
            fetchEntities();
        })
    }
    const onDelete = () => {
        setLoading(true)

        UserService.deleteUser(entity?.id)
            .then(() => {
                addNotification({
                    message: "User succesfully deleted!",
                    type: "success"
                })
                setDeleteModal(false);
            })
            .catch(() => {
            }).finally(() => {
            setLoading(false);
            fetchEntities();
        })
    }
    const handleAddNewEntity = () => {
        setCreateModal(true);
    };

    const handleCloseCreate = () => {
        setCreateModal(false);
        setEntity(null);
    };
    const handleCloseView = () => {
        setViewModal(false);
        setEntity(null);
    }
    const handleCloseDelete = () => {
        setDeleteModal(false);
        setEntity(null);
    }

    const handlePageChange = (newPage: number) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: newPage,
        }));
    };


    return (
        <>
            {loading && <LoadingSpinner/>}
            <DynamicTable
                title={"Manage Users"}
                pagination={pagination}
                data={entities}
                setEntity={setEntity}
                columns={columns}
                onAddNewEntity={handleAddNewEntity}
                onPageChange={handlePageChange}
                onView={() => setViewModal(true)}
                onEdit={"users"}
                onDelete={() => setDeleteModal(true)}
                router={router}
            />
            <FormModal
                form={
                    <DynamicFormModal
                        fields={fields}
                        validationSchema={validation}
                        onClose={handleCloseCreate}
                        submitColor={"success"}
                        onSubmit={onSubmit}
                    />}
                isOpen={createModal}
                onClose={handleCloseCreate}
                title="Create New">
            </FormModal>
            <Modal title={"View"} isOpen={viewModal} onClose={handleCloseView}>
                <DynamicBody entity={entity}/>
            </Modal>
            <Modal
                title={"Delete"}
                isOpen={deleteModal}
                onClose={handleCloseDelete}
                onSubmit={onDelete}
                submitColor={"danger"}
                submitLabel={"Delete"}
            >
                <div className={"p-4 text-center"}>
                    <p className={"text-2xl "}>Do you want to delete selected user ?</p>
                    <span className={"text-red-500"}>OBS: Delected users cannot be recovered!</span>
                </div>
            </Modal>
        </>
    );
}
export default Users;
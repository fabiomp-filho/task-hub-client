import DynamicTable from "@/components/table/DynamicTable";
import {useEffect, useState} from "react";
import Modal from "@/components/modal/Modal";

const Users = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [pagination, setPagination] = useState({
        size: 10,
        currentPage: 0,
        totalPages: 10,
        totalElements: 50,
    });

    useEffect(() => {
        console.log(pagination)
    }, []);
    const data = [
        { id: 1, name: 'Entity 1', value: 'Value 1' },
        { id: 2, name: 'Entity 2', value: 'Value 2' },
        { id: 3, name: 'Entity 1', value: 'Value 1' },
        { id: 4, name: 'Entity 2', value: 'Value 2' },
        { id: 5, name: 'Entity 1', value: 'Value 1' },
        { id: 6, name: 'Entity 2', value: 'Value 2' },
        { id: 7, name: 'Entity 1', value: 'Value 1' },
        { id: 8, name: 'Entity 1', value: 'Value 1' },
        { id: 9, name: 'Entity 2', value: 'Value 2' },
        { id: 10, name: 'Entity 1', value: 'Value 1' },

    ];

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'value', label: 'Value' },
    ];

    const handleAddNewEntity = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePageChange = (newPage: number) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: newPage,
        }));
    };

    return (
        <>
            <DynamicTable
                title={"Manage Users"}
                pagination={pagination}
                data={data}
                columns={columns}
                onAddNewEntity={handleAddNewEntity}
                onPageChange={handlePageChange}
            />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add">
                <p>This is the content of the modal.</p>
            </Modal>
        </>
    );
}
export default Users;
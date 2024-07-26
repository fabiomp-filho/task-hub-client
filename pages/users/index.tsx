import DynamicTable from "@/components/table/DynamicTable";
import {useState} from "react";

const Users = () => {

    const [pagination, setPagination] = useState({
        size: 10,
        currentPage: 1,
        totalPages: 5,
        totalElements: 50,
    });

    const data = [
        { id: 1, name: 'Entity 1', value: 'Value 1' },
        { id: 2, name: 'Entity 2', value: 'Value 2' },
        // Adicione mais dados conforme necessário
    ];

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'value', label: 'Value' },
    ];

    const handleAddNewEntity = () => {
        console.log('Add new entity');
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
                pagination={pagination}
                data={data}
                columns={columns}
                onAddNewEntity={handleAddNewEntity}
                onPageChange={handlePageChange}
            />
        </>
    );
}
export default Users;
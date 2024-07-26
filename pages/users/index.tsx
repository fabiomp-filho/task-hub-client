import DynamicTable from "@/components/table/DynamicTable";
import {useState} from "react";

const Users = () => {

    const [pagination, setPagination] = useState({
        size: 10,
        currentPage: 0,
        totalPages: 10,
        totalElements: 50,
    });

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
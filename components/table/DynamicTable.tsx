import React from 'react';
import CustomButton from "@/components/buttons/CustomButton";
import Pagination from "@/components/table/Pagination";
interface Pagination {
    size: number;
    currentPage: number;
    totalPages: number;
    totalElements: number;
}

interface Column {
    key: string;
    label: string;
    format?: (value: any) => React.ReactNode;
}

interface DynamicTableProps {
    pagination: Pagination;
    data: any[];
    columns: Column[];
    onAddNewEntity: () => void;
    onPageChange: (newPage: number) => void;
}

const DynamicTable: React.FC<DynamicTableProps> = ({pagination, data, columns, onAddNewEntity, onPageChange}) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className={"flex flex-col shadow-lightgreyHover shadow flex-1 p-8 gap-20 bg-white md:m-12 rounded-3xl"}>
            <div className={"flex justify-between"}>
                <h3 className={"md:text-4xl text-xl font-medium"}>Manage Users</h3>
                <CustomButton onClick={onAddNewEntity} color={"success"} type={"button"} title={"Add New"}/>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
                        tracking-wider">
                            {column.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                                {column.format ? column.format(row[column.key]) : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination pagination={pagination} onPageChange={handlePageChange}/>
        </div>
    );
};

export default DynamicTable;

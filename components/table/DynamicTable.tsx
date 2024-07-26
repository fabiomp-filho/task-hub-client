import React from 'react';
import CustomButton from "@/components/buttons/CustomButton";
import Pagination from "@/components/table/Pagination";
import {FaPen, FaEye, FaTrash, FaPlus} from "react-icons/fa";

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
    onView: (id: any) => void;
    onEdit: (id: any) => void;
    onDelete: (id: any) => void;
}

const DynamicTable: React.FC<DynamicTableProps> = (
    {
        pagination,
        data,
        columns,
        onAddNewEntity,
        onPageChange,
        onView,
        onEdit,
        onDelete
    }) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="flex flex-col shadow-lightgreyHover shadow flex-1 p-8 bg-white md:m-12 rounded-3xl overflow-auto">
            <div className="min-w-full flex justify-between mb-4">
                <h3 className="md:text-4xl text-xl font-medium">Manage Users</h3>
                <CustomButton icon={<FaPlus size={18}/> } onClick={onAddNewEntity} color="success" type="button" title="Add New"/>
            </div>
            <div className="overflow-auto my-12">
                <table className="min-w-full table-fixed border-collapse ">
                    <thead className="bg-mediumgreen">
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className="hover:bg-mediumgreenHover transition-all duration-300 px-4 py-3 text-left font-medium text-white uppercase border
                           ">
                                {column.label}
                            </th>

                        ))}
                        <th key={"actions"}
                            className="transition-all duration-300 w-1/4 text-center px-4 py-3 hover:bg-mediumgreenHover font-medium text-white uppercase border
                           ">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={"hover:bg-iceWhite transition-all duration-300"}>
                            {columns.map((column) => (
                                <td key={column.key} className=" px-4 whitespace-nowrap  border-lightgrey">
                                    {column.format ? column.format(row[column.key]) : row[column.key]}
                                </td>
                            ))}
                            <td className="px-4 py-2 whitespace-nowrap border-lightgrey flex gap-4 justify-center">
                                <CustomButton
                                    color={"primary"}
                                    px={"3"}
                                    onClick={() => onView(row.id)}
                                    hoverTitle={"Click to view info"}
                                    icon={<FaEye className={"text-white"} size={18}/>}
                                />
                                <CustomButton
                                    color={"secondary"}
                                    px={"3"}
                                    onClick={() => onEdit(row.id)}
                                    hoverTitle="Click to edit info"
                                    icon={<FaPen className={"text-white"} size={18}/>}
                                />
                                <CustomButton
                                    color={"danger"}
                                    px={"3"}
                                    onClick={() => onDelete(row.id)}
                                    hoverTitle="Click to exclude"
                                    icon={<FaTrash className={"text-white"} size={18}/>}
                                />
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            <Pagination pagination={pagination} onPageChange={handlePageChange}/>
        </div>
    );
};

export default DynamicTable;

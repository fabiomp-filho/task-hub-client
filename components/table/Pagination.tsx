import React from "react";

const Pagination = ({pagination, onPageChange}) => {

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className={"mt-4 flex justify-between items-center"}>
                <span>
                    Page {pagination.currentPage} of {pagination.totalPages}
                </span>
            <div>
                <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                    disabled={pagination.currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    className="bg-gray-300 text-gray-700 p-2 rounded"
                    disabled={pagination.currentPage === pagination.totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
export default Pagination;
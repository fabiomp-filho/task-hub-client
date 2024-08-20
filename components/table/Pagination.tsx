import React from "react";
import CustomButton from "@/components/buttons/CustomButton";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PaginationProps {
    pagination: {
        size: number;
        currentPage: number;
        totalPages: number;
        totalElements: number;
    };
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
    const { currentPage, totalPages } = pagination;

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            onPageChange(newPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(currentPage - 2, 0);
        let endPage = Math.min(startPage + 4, totalPages - 1);

        if (endPage - startPage < 4) {
            startPage = Math.max(endPage - 4, 0);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <CustomButton
                    px={"4"}
                    py={"2"}
                    key={i}
                    rounded={""}
                    color={"mediumgreen"}
                    onClick={() => handlePageChange(i)}
                    disabled={currentPage === i}
                    title={(i + 1).toString()}
                />
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center md:justify-end items-center mt-auto">
            <div className="flex items-center">
                <CustomButton
                    px={"3"}
                    py={"2"}
                    rounded={"rounded-l-lg"}
                    color={"mediumgreen"}
                    onClick={() => handlePageChange(0)}
                    disabled={currentPage === 0}
                    hoverTitle={"First"}
                    icon={<AiOutlineDoubleLeft size={24} />}
                />
                <CustomButton
                    px={"3"}
                    py={"2"}
                    rounded={""}
                    color={"mediumgreen"}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    hoverTitle={"Previous"}
                    icon={<AiOutlineLeft size={24} />}
                />
                {renderPageNumbers()}
                <CustomButton
                    px={"3"}
                    py={"2"}
                    rounded={""}
                    color={"mediumgreen"}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    hoverTitle={"Next"}
                    icon={<AiOutlineRight size={24} />}
                />
                <CustomButton
                    rounded={"rounded-r-lg"}
                    px={"3"}
                    py={"2"}
                    color={"mediumgreen"}
                    onClick={() => handlePageChange(totalPages - 1)}
                    disabled={currentPage === totalPages - 1}
                    hoverTitle={"Last"}
                    icon={<AiOutlineDoubleRight size={24} />}
                />
            </div>
        </div>
    );
};

export default Pagination;

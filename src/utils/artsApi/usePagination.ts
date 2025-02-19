import { useState } from 'react';

export const usePagination = (totalPages: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return { currentPage, goToPreviousPage, goToNextPage, goToPage };
};

import { useState } from "react";

export function usePagination(totalItems, itemsPerPage, items) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const currentItems = () => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return items.slice(firstIndex, lastIndex);
  };

  return {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    currentItems,
  };
}

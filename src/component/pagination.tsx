import type { PaginationResponse } from "../types/files";
import { 
    HiOutlineChevronDoubleLeft,
    HiChevronDoubleRight
 } from "react-icons/hi";

interface PaginationProps {
    pagination: PaginationResponse | null;
    refetch: (page: number) => void;
}

function Pagination({ pagination, refetch }: PaginationProps) {
    if (!pagination) return null;

    return (
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#E5E5E5]">
            <button
                className='size-8 p-0 @max-md/content:hidden'
                disabled={!pagination.has_previous}
                onClick={() => refetch(pagination.current_page - 1)}
            >
                <HiOutlineChevronDoubleLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">
                    Page {pagination.current_page} of {pagination.total_pages}
                </span>
            </div>

            <button
                className='size-8 p-0 @max-md/content:hidden'
                disabled={!pagination.has_next}
                onClick={() => refetch(pagination.current_page + 1)}
            >
                <HiChevronDoubleRight size={20} />
            </button>
        </div>
    );
}

export default Pagination;

import { useEffect, useState } from "react";
import { getFiles } from "../services/files";
import type {
    Files,
    PaginationResponse
} from "../types/files";

export const useFiles = () => {

    const [files, setFiles] = useState<Files[]>([]);
    const [pagination, setPagination] =
        useState<PaginationResponse | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchFiles = async (page: number = 1) => {
        try {
            setLoading(true);
            setError(null);

            const response = await getFiles(page, 10);

            setFiles(response.data);
            setPagination(response.pagination);

        } catch (err: any) {
            console.error("Files error:", err);

            setError(
                err.response?.data?.detail || "Failed to fetch Files"
            );

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles(1);
    }, []);

    return {
        files,
        pagination,
        loading,
        error,
        refetch: fetchFiles
    };
};

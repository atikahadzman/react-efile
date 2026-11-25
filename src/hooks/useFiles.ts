import { useEffect, useState } from "react";
import { getFiles } from "../services/files";
import type { Files } from "../types/files";

export default function useFiles() {
    const [files, setFiles] = useState<Files[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchFiles = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getFiles();

            setFiles(data);
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
        fetchFiles();
    }, []);

    return {
        files,
        loading,
        error,
        refetch: fetchFiles
    };
}
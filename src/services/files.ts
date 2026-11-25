import axios from "axios";
import type { FilesResponse } from "../types/files";

export const getFiles = async (page: number, pageSize: number): Promise<FilesResponse> => {
    const token = localStorage.getItem("access_token");

    const response = await axios.get<FilesResponse>(
        import.meta.env.VITE_BASE_URL + "/file",
        {
            params: {
                page: page,
                page_size: pageSize
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    
    return response.data;
};
import axios from "axios";
import type { TransactionResponse } from "../types/transaction";

export const getTransactions = async (): Promise<TransactionResponse> => {
    const token = localStorage.getItem("access_token");

    const response = await axios.get<TransactionResponse>(
        import.meta.env.VITE_BASE_URL + "/transaction",
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    
    return response.data;
};
import { useEffect, useState } from "react";
import { getTransactions } from "../services/transaction";
import type { Transaction } from "../types/transaction";

export default function useTransactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTransactions = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getTransactions();

            setTransactions(data);

        } catch (err: any) {
            console.error("Transaction error:", err);

            setError(
                err.response?.data?.detail || "Failed to fetch transactions"
            );

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return {
        transactions,
        loading,
        error,
        refetch: fetchTransactions
    };
}
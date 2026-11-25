import useTransactions from "../../hooks/useTransaction";
import {
    MoreHorizontal,
} from "lucide-react";

const Transaction = () => {
    const {
        transactions,
        loading,
        // error,
        refetch
    } = useTransactions();

    if (loading) {
        return <div className="p-6">Loading transactions...</div>;
    }

    return (
        <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6">
                <div>
                    <h3 className="text-lg text-slate-700 font-bold">
                        Recent Transactions
                    </h3>
                </div>
                <button
                    onClick={refetch}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    Retry
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 uppercase text-slate-700">
                    <tr>
                        <th className="px-6 py-4">File Title/Number</th>
                        <th className="px-6 py-4">Date Taken</th>
                        <th className="px-6 py-4">Date Return</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                    </thead>
                    <tbody className="items-center justify-between divide-y divide-slate-200 text-slate-900 hover:text-slate-700">
                        {transactions.length > 0 ? (
                            transactions.map((item) => (
                                <tr
                                    key={item.transID}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-3">
                                        {item.fileName} 
                                        <p>
                                            <span className="text-sm text-slate-700"> 
                                                ({item.fileNo}) 
                                            </span>
                                        </p>
                                    </td>
                                    <td className="p-3">{item.fileDateTaken}</td>
                                    <td className="p-3">{item.fileDateReturn}</td>
                                    <td className="p-3">{item.fileTransStatus}</td>
                                    <td className="px-6 py-5">
                                        <button className="text-black hover:text-slate-700">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="p-6 text-center text-gray-400"
                                >
                                    No transactions found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Transaction;
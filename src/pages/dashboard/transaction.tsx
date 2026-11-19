import {
    MoreHorizontal,
} from "lucide-react";

const Transaction = () => {
    const activities = [
        { name: "John Smith", action: "Purchased a product", amount: "$240", status: "Completed" },
        { name: "Sarah Johnson", action: "Placed an order", amount: "$180", status: "Pending" },
        { name: "Michael Brown", action: "Purchased a product", amount: "$520", status: "Completed" },
        { name: "Emily Davis", action: "Placed an order", amount: "$95", status: "Cancelled" },
    ];

    return (
        <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6">
                <div>
                    <h3 className="text-lg font-bold">Recent Transactions</h3>
                    <p className="text-sm text-slate-400 mt-1">
                    Latest customer activities
                    </p>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-400">
                    <tr>
                        <th className="px-6 py-4">Staff ID</th>
                        <th className="px-6 py-4">File Title</th>
                        <th className="px-6 py-4">Date Taken</th>
                        <th className="px-6 py-4">Date Return</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {activities.map((activity) => (
                            <tr key={activity.name} className="hover:bg-slate-50">
                                <td className="px-6 py-5 font-medium text-sm whitespace-nowrap">
                                    {activity.name}
                                </td>
                                <td className="px-6 py-5 text-sm text-slate-500 whitespace-nowrap">
                                    {activity.action}
                                </td>
                                <td className="px-6 py-5 text-sm font-semibold">
                                    {activity.amount}
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    activity.status === "Completed"
                                        ? "bg-green-50 text-green-600"
                                        : activity.status === "Pending"
                                        ? "bg-yellow-50 text-yellow-600"
                                        : "bg-red-50 text-red-600"
                                    }`}>
                                    {activity.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <button className="text-slate-400 hover:text-slate-700">
                                    <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Transaction;
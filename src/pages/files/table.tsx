import useFiles from "../../hooks/useFiles";
import {
    MoreHorizontal,
} from "lucide-react";

const Table = () => {
    const {
        files,
        loading,
        // error,
        refetch
    } = useFiles();

    if (loading) {
        return <div className="p-6">Loading files...</div>;
    }

    return (
        <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6">
                <div>
                    <h3 className="text-lg text-slate-700 font-bold">
                        List of Files
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
                        <th className="px-6 py-4">File Number</th>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date Register</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                    </thead>
                    <tbody className="items-center justify-between divide-y divide-slate-200 text-slate-900 hover:text-slate-700">
                        {files.length > 0 ? (
                            files.map((item) => (
                                <tr
                                    key={item.fileNo}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-3">{item.fileNo}</td>
                                    <td className="p-3">{item.fileName} </td>
                                    <td className="p-3">{item.categoryID} / {item.subid} / {item.cabinetid} / {item.levelid} </td>
                                    <td className="p-3">{item.fileStatus}</td>
                                    <td className="p-3">{item.fileDateIn}</td>
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
                                    No files found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Table;
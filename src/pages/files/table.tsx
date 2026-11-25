
import { MoreHorizontal } from "lucide-react";
import type { Files } from "../../types/files";

interface TableProps {
    files: Files[];
}

const Table = ({ files }: TableProps) => {
    return (
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

                <tbody className="divide-y divide-slate-200 text-slate-900">
                    {files.length > 0 ? (
                        files.map((item) => (
                            <tr
                                key={item.fileNo}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-3">{item.fileNo}</td>
                                <td className="p-3">{item.fileName}</td>
                                <td className="p-3">
                                    {item.categoryName} /
                                    {item.subName} /
                                    {item.cabinetNo} /
                                    {item.levelDesc}
                                </td>
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
                                colSpan={6}
                                className="p-6 text-center text-gray-400"
                            >
                                No files found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
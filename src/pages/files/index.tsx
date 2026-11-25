import { useFiles } from "../../hooks/useFiles";
import Table from './table'
import Pagination from "../../component/pagination";

function Files() {
    const {
            files,
            loading,
            pagination,
            error,
            refetch
        } = useFiles();
    
        if (loading) {
            return <div className="p-6">Loading files...</div>;
        }
    
        if (error) {
            return <p>{error}</p>;
        }

    return (
        <>
            <h1 className="text-lg font-bold">
                Files
            </h1>

            <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6">
                    <h3 className="text-lg text-slate-700 font-bold">
                        List of Files
                    </h3>
                    <button
                        onClick={() => refetch(1)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        Retry
                    </button>
                </div>
                    
                <Table 
                    files={files}
                />
                <Pagination
                    pagination={pagination}
                    refetch={refetch}
                />

            </section>
        </>
    )
}

export default Files;
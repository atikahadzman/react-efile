
import {
    HiMenu,
    HiOutlineBell,
    HiOutlineSearch,
} from "react-icons/hi";

interface NavbarProps {
    onToggleSidebar: () => void;
}

export default function Navbar({
    onToggleSidebar,
}: NavbarProps) {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shrink-0">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                >
                    <HiMenu size={22} />
                </button>

                <span className="text-gray-800">
                    Dashboard
                </span>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                    <HiOutlineSearch className="text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm w-32"
                    />
                </div>

                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <HiOutlineBell size={22} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                        JD
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-800">
                            John Doe
                        </p>
                        <p className="text-xs text-gray-400">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}


import {
    HiMenu
} from "react-icons/hi";

interface NavbarProps {
    onToggleSidebar: () => void;
}

interface User {
    id: number;
    name: string;
    username: string;
    role: string;
    unit?: string;
}

export default function Navbar({
    onToggleSidebar,
}: NavbarProps) {
    const user: User = JSON.parse(localStorage.getItem("user") || "{}");
    const { name, role } = user;
    const username: string = user.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : "";

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shrink-0">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 lg:h-11 lg:w-11"
                >
                    <HiMenu size={22} />
                </button>
                <h2>Hi, {username} </h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                        JD
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-800">
                            {name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

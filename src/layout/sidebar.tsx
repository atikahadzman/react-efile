import { NavLink, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import {
    HiOutlineHome,
    HiLogout,
    HiDocumentDuplicate
} from "react-icons/hi";

interface SidebarProps {
    collapsed: boolean;
}

interface NavItem {
    id: string;
    to: string;
    label: string;
    icon: ReactNode;
    badge?: number;
}

const navItems: NavItem[] = [
    {
        id: "dashboard",
        to: "/dashboard",
        label: "Dashboard",
        icon: <HiOutlineHome size={20} />,
    },
    {
        id: "files",
        to: "/files",
        label: "Files",
        icon: <HiDocumentDuplicate size={20} />,
    }
];

export default function Sidebar({ collapsed }: SidebarProps) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.removeItem('access_token');
        navigate("/login");
    };

    return (
        <aside
            className={`
                h-full flex flex-col
                border-r border-[#E5E5E5]
                transition-all duration-200 ease-in-out
                overflow-hidden shrink-0
                ${collapsed ? "w-0 md:w-16" : "w-56"}
            `}
        >

        <nav className="flex flex-col flex-1 p-2 space-y-1">
            {navItems.map(({ id, to, label, icon, badge }) => (
            <NavLink
                key={id}
                to={to}
                end={to === "/"}
                title={collapsed ? label : undefined}
                className={({ isActive }) => `
                flex items-center justify-between
                gap-3 px-3 py-2.5 rounded-lg
                text-sm transition-all duration-200
                ${
                    isActive
                    ? "text-white font-semibold shadow-sm"
                    : "text-white hover:bg-white/15"
                }
                ${collapsed ? "md:justify-center" : ""}
                `}
            >
                <span className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0">{icon}</span>
                    <span
                        className={`
                            whitespace-nowrap transition-all
                            ${collapsed ? "md:hidden" : ""}
                        `}
                    >
                        {label}
                    </span>
                </span>

                {badge !== undefined && (
                    <span
                        className={`
                            min-w-5 h-5 px-1.5
                            items-center justify-center
                            rounded-full bg-red-500
                            text-white text-xs font-semibold
                            ${collapsed ? "hidden" : "flex"}
                        `}
                    >
                    {badge}
                    </span>
                )}
            </NavLink>
            ))}
        </nav>

        {!collapsed && (
            <div className="hidden md:block p-3 border-t border-white/20">
                <div className="bg-white rounded-lg p-3 flex flex-col gap-3">
                    <button
                        onClick={handleLogout}
                        type="button"
                        className="
                            w-full flex items-center justify-center gap-2
                            px-3 py-2 rounded-lg
                            text-sm font-medium
                            hover:text-[#000b1b]
                            transition-colors
                        "
                    >
                        <HiLogout size={18} />
                        Logout
                    </button>
                </div>
            </div>
        )}
        </aside>
    );
}

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            <Navbar
                onToggleSidebar={() => setCollapsed(!collapsed)}
            />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar collapsed={collapsed}/>
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
}

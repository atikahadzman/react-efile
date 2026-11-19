// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from "./layout/layout";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import './App.css'

function App() {
    return (
        // <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
            </Route>
        </Routes>
        // </BrowserRouter>
    )
}

export default App

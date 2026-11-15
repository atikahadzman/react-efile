import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../services/auth";

export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (
        username: string,
        password: string
    ) => {
        setLoading(true);
        setError("");

        try {
            const data = await loginUser({
                username,
                password,
            });

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            navigate("/dashboard");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(
                    err.response?.data?.detail ||
                    "Invalid username or password"
                );
            } else {
                setError("Something went wrong");
            }

        } finally {
            setLoading(false);
        }
    };

    return {
        handleLogin,
        loading,
        error,
    };
}
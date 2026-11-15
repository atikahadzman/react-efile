import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, loading, error } = useAuth();

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>PTJM Machang</h1>
                    <p>Login to access your account</p>
                </div>

                <form onSubmit={onSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 border border-gray-700/60 rounded-xl text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pr-12 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 border border-gray-700/60 rounded-xl text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pr-12 transition-all"
                        />
                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="login-button"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

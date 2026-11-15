import axios from "axios";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const loginUser = async (
    credentials: LoginRequest
): Promise<LoginResponse> => {
    const formData = new URLSearchParams();
    formData.append("username", credentials.username);
    formData.append("password", credentials.password);

    const response = await axios.post<LoginResponse>(
        import.meta.env.VITE_API_URL + "/login",
        {
            username: credentials.username,
            password: credentials.password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response.data;
};
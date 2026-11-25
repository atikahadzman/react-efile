export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
    id: number;
    username: string;
    name: string;
    unit: string;
    role: string;
}
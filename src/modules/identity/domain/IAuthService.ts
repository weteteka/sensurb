export interface AuthUser {
    id: string;
    email: string;
}

export interface AuthSession {
    user: AuthUser;
    accessToken: string;
}

export interface IAuthService {
    signUp(email: string, password: string): Promise<AuthUser>;
    signIn(email: string, password: string): Promise<AuthSession>;
}

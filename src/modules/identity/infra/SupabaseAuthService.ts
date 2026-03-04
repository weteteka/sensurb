import { IAuthService, AuthUser, AuthSession } from "../domain/IAuthService";

export class SupabaseAuthService implements IAuthService {
    async signUp(email: string, password: string): Promise<AuthUser> {
        console.log(`Supabase: Signing up user ${email}`);
        return {
            id: Math.random().toString(36).substring(7),
            email
        };
    }

    async signIn(email: string, password: string): Promise<AuthSession> {
        console.log(`Supabase: Signing in user ${email}`);
        return {
            user: {
                id: "user_123",
                email
            },
            accessToken: "mock_jwt_token"
        };
    }
}

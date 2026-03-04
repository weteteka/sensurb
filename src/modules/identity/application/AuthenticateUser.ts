import { IAuthService, AuthSession } from "../domain/IAuthService";

export interface AuthenticateUserInput {
    email: string;
    password: string;
}

export class AuthenticateUser {
    constructor(private authService: IAuthService) { }

    async execute(input: AuthenticateUserInput): Promise<AuthSession> {
        return await this.authService.signIn(input.email, input.password);
    }
}

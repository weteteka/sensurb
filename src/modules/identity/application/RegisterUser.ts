import { User } from "../domain/User";
import { IUserRepository } from "../domain/IUserRepository";

export interface RegisterUserInput {
    companyId: number;
    name: string;
    email: string;
    passwordHash: string;
}

export type RegisterUserOutput = User;

export class RegisterUser {
    constructor(private userRepository: IUserRepository) { }

    async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {
        const existingUser = await this.userRepository.findByEmail(input.email);
        if (existingUser) {
            throw new Error(`User with email ${input.email} already exists.`);
        }

        const user = User.create({
            companyId: input.companyId,
            name: input.name,
            email: input.email,
            passwordHash: input.passwordHash,
            status: 'active',
            createdAt: new Date(),
        });

        await this.userRepository.create(user);

        return user;
    }
}

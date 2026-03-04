import { User } from "../domain/User";
import { IUserRepository } from "../domain/IUserRepository";

export class PrismaUserRepository implements IUserRepository {
    async create(user: User): Promise<void> {
        console.log("Prisma: Creating user", user.email);
    }

    async update(user: User): Promise<void> {
        console.log("Prisma: Updating user", user.id);
    }

    async delete(id: number): Promise<void> {
        console.log("Prisma: Deleting user", id);
    }

    async findById(id: number): Promise<User | null> {
        return null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return null;
    }

    async findAllByCompanyId(companyId: number): Promise<User[]> {
        return [];
    }
}

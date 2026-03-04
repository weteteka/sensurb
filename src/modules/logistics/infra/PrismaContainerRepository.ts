import { Container } from "../domain/Container";
import { IContainerRepository } from "../domain/IContainerRepository";

export class PrismaContainerRepository implements IContainerRepository {
    async create(container: Container): Promise<void> {
        console.log("Prisma: Creating container", container.code);
    }

    async update(container: Container): Promise<void> {
        console.log("Prisma: Updating container", container.id);
    }

    async delete(id: number): Promise<void> {
        console.log("Prisma: Deleting container", id);
    }

    async findById(id: number): Promise<Container | null> {
        return null;
    }

    async findByCode(code: string): Promise<Container | null> {
        return null;
    }

    async findAllByClientId(clientId: number): Promise<Container[]> {
        return [];
    }

    async findAllByCompanyId(companyId: number): Promise<Container[]> {
        return [];
    }
}

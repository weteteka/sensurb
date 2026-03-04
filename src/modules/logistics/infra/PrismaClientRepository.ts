import { Client } from "../domain/Client";
import { IClientRepository } from "../domain/IClientRepository";

export class PrismaClientRepository implements IClientRepository {
    async create(client: Client): Promise<void> {
        console.log("Prisma: Creating client", client.name);
    }

    async update(client: Client): Promise<void> {
        console.log("Prisma: Updating client", client.id);
    }

    async delete(id: number): Promise<void> {
        console.log("Prisma: Deleting client", id);
    }

    async findById(id: number): Promise<Client | null> {
        return null;
    }

    async findAllByCompanyId(companyId: number): Promise<Client[]> {
        return [];
    }
}

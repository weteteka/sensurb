import { Company } from "../domain/Company";
import { ICompanyRepository } from "../domain/ICompanyRepository";

export class PrismaCompanyRepository implements ICompanyRepository {
    async create(company: Company): Promise<void> {
        console.log("Saving company to Prisma:", company.name);
        // Implementation will go here once Prisma is configured
    }

    async findById(id: number): Promise<Company | null> {
        return null;
    }

    async update(company: Company): Promise<void> {
        // Implementation
        console.log("Updating company:", company.name);
    }

    async delete(id: number): Promise<void> {
        // Implementation
        console.log("Deleting company with id:", id);
    }

    async findAll(): Promise<Company[]> {
        return [];
    }
}

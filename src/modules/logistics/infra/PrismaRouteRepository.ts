import { Route } from "../domain/Route";
import { IRouteRepository } from "../domain/IRouteRepository";

export class PrismaRouteRepository implements IRouteRepository {
    async create(route: Route): Promise<void> {
        console.log("Prisma: Creating route", route.name);
    }

    async update(route: Route): Promise<void> {
        console.log("Prisma: Updating route", route.id);
    }

    async delete(id: number): Promise<void> {
        console.log("Prisma: Deleting route", id);
    }

    async findById(id: number): Promise<Route | null> {
        return null;
    }

    async findAllByCompanyId(companyId: number): Promise<Route[]> {
        return [];
    }

    async findAllByStatus(status: string): Promise<Route[]> {
        return [];
    }
}

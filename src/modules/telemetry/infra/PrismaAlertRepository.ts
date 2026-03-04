import { Alert } from "../domain/Alert";
import { IAlertRepository } from "../domain/IAlertRepository";

export class PrismaAlertRepository implements IAlertRepository {
    async create(alert: Alert): Promise<void> {
        console.log("Prisma: Creating alert", alert.type);
    }

    async update(alert: Alert): Promise<void> {
        console.log("Prisma: Updating alert", alert.id);
    }

    async findById(id: number): Promise<Alert | null> {
        return null;
    }

    async findAllByCompanyId(companyId: number): Promise<Alert[]> {
        return [];
    }

    async findAllBySensorId(sensorId: number): Promise<Alert[]> {
        return [];
    }

    async findAllByStatus(status: string): Promise<Alert[]> {
        return [];
    }
}

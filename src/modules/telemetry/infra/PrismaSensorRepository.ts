import { Sensor } from "../domain/Sensor";
import { ISensorRepository } from "../domain/ISensorRepository";

export class PrismaSensorRepository implements ISensorRepository {
    async create(sensor: Sensor): Promise<void> {
        console.log("Prisma: Creating sensor", sensor.serialNumber);
    }

    async update(sensor: Sensor): Promise<void> {
        console.log("Prisma: Updating sensor", sensor.serialNumber);
    }

    async delete(id: number): Promise<void> {
        console.log("Prisma: Deleting sensor", id);
    }

    async findById(id: number): Promise<Sensor | null> {
        return null; // Implementation needed
    }

    async findBySerialNumber(serialNumber: string): Promise<Sensor | null> {
        return null; // Implementation needed
    }

    async findAllByContainerId(containerId: number): Promise<Sensor[]> {
        return [];
    }

    async findAllByCompanyId(companyId: number): Promise<Sensor[]> {
        return [];
    }
}

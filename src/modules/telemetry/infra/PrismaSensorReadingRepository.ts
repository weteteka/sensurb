import { SensorReading } from "../domain/SensorReading";
import { ISensorReadingRepository } from "../domain/ISensorReadingRepository";

export class PrismaSensorReadingRepository implements ISensorReadingRepository {
    async create(reading: SensorReading): Promise<void> {
        console.log("Prisma: Creating sensor reading for sensor", reading.sensorId);
    }

    async findById(id: number): Promise<SensorReading | null> {
        return null;
    }

    async findAllBySensorId(sensorId: number): Promise<SensorReading[]> {
        return [];
    }

    async findLatestBySensorId(sensorId: number): Promise<SensorReading | null> {
        return null;
    }
}

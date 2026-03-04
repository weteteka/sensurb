import { SensorReading } from "./SensorReading";

export interface ISensorReadingRepository {
    create(reading: SensorReading): Promise<void>;
    findById(id: number): Promise<SensorReading | null>;
    findAllBySensorId(sensorId: number): Promise<SensorReading[]>;
    findLatestBySensorId(sensorId: number): Promise<SensorReading | null>;
}

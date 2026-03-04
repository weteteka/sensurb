import { ISensorRepository } from "../domain/ISensorRepository";
import { ISensorReadingRepository } from "../domain/ISensorReadingRepository";
import { SensorReading } from "../domain/SensorReading";
import { CheckThresholds } from "./CheckThresholds";

export interface ProcessReadingInput {
    serialNumber: string;
    temperature?: number;
    fillLevel?: number;
    batteryLevel?: number;
}

export class ProcessReading {
    constructor(
        private sensorRepository: ISensorRepository,
        private readingRepository: ISensorReadingRepository,
        private checkThresholds: CheckThresholds
    ) { }

    async execute(input: ProcessReadingInput): Promise<void> {
        const sensor = await this.sensorRepository.findBySerialNumber(input.serialNumber);

        if (!sensor) {
            throw new Error(`Sensor with serial number ${input.serialNumber} not found`);
        }

        const reading = SensorReading.create({
            sensorId: sensor.id,
            temperature: input.temperature,
            fillLevel: input.fillLevel,
            batteryLevel: input.batteryLevel,
            createdAt: new Date()
        });

        await this.readingRepository.create(reading);

        // Analyze reading for alerts
        await this.checkThresholds.execute({ sensor, reading });
    }
}

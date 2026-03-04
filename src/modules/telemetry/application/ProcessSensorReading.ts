import { SensorReading } from "../domain/SensorReading";
import { Alert, AlertStatus } from "../domain/Alert";
import { ISensorReadingRepository } from "../domain/ISensorReadingRepository";
import { IAlertRepository } from "../domain/IAlertRepository";
import { ISensorRepository } from "../domain/ISensorRepository";

export interface ProcessSensorReadingInput {
    sensorId: number;
    fillLevel: number;
    temperature: number;
    batteryLevel: number;
}

export interface ProcessSensorReadingOutput {
    reading: SensorReading;
    alert?: Alert;
}

export class ProcessSensorReading {
    constructor(
        private sensorRepository: ISensorRepository,
        private sensorReadingRepository: ISensorReadingRepository,
        private alertRepository: IAlertRepository
    ) { }

    async execute(input: ProcessSensorReadingInput): Promise<ProcessSensorReadingOutput> {
        const sensor = await this.sensorRepository.findById(input.sensorId);
        if (!sensor) {
            throw new Error(`Sensor with ID ${input.sensorId} not found.`);
        }

        const reading = SensorReading.create({
            sensorId: input.sensorId,
            fillLevel: input.fillLevel,
            temperature: input.temperature,
            batteryLevel: input.batteryLevel,
            createdAt: new Date(),
        });

        await this.sensorReadingRepository.create(reading);

        let alert: Alert | undefined;

        if (input.fillLevel > 90) {
            alert = Alert.create({
                companyId: sensor.companyId,
                sensorId: input.sensorId,
                type: 'CRITICAL_FILL_LEVEL',
                message: `Container fill level is critically high: ${input.fillLevel}%`,
                status: AlertStatus.OPEN,
                createdAt: new Date(),
            });

            await this.alertRepository.create(alert);
        }

        return { reading, alert };
    }
}

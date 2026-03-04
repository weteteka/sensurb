import { Alert, AlertStatus } from "../domain/Alert";
import { IAlertRepository } from "../domain/IAlertRepository";
import { Sensor } from "../domain/Sensor";
import { SensorReading } from "../domain/SensorReading";

export interface CheckThresholdsInput {
    sensor: Sensor;
    reading: SensorReading;
}

export class CheckThresholds {
    constructor(private alertRepository: IAlertRepository) { }

    async execute(input: CheckThresholdsInput): Promise<void> {
        const { sensor, reading } = input;
        const thresholds = sensor.thresholds;

        if (!thresholds) return;

        // Check Temperature
        if (reading.temperature !== undefined) {
            if (thresholds.maxTemperature !== undefined && reading.temperature > thresholds.maxTemperature) {
                await this.createAlert(sensor, "TEMPERATURE_HIGH", `Temperature exceeded ${thresholds.maxTemperature}°C: ${reading.temperature}°C`);
            }
            if (thresholds.minTemperature !== undefined && reading.temperature < thresholds.minTemperature) {
                await this.createAlert(sensor, "TEMPERATURE_LOW", `Temperature fell below ${thresholds.minTemperature}°C: ${reading.temperature}°C`);
            }
        }

        // Check Fill Level
        if (reading.fillLevel !== undefined) {
            if (thresholds.maxFillLevel !== undefined && reading.fillLevel > thresholds.maxFillLevel) {
                await this.createAlert(sensor, "FILL_LEVEL_HIGH", `Fill level exceeded ${thresholds.maxFillLevel}%: ${reading.fillLevel}%`);
            }
        }

        // Check Battery
        if (reading.batteryLevel !== undefined) {
            if (thresholds.minBatteryLevel !== undefined && reading.batteryLevel < thresholds.minBatteryLevel) {
                await this.createAlert(sensor, "BATTERY_LOW", `Battery level below ${thresholds.minBatteryLevel}%: ${reading.batteryLevel}%`);
            }
        }
    }

    private async createAlert(sensor: Sensor, type: string, message: string): Promise<void> {
        const alert = Alert.create({
            companyId: sensor.companyId,
            sensorId: sensor.id,
            type,
            message,
            status: AlertStatus.OPEN,
            createdAt: new Date()
        });

        await this.alertRepository.create(alert);
    }
}

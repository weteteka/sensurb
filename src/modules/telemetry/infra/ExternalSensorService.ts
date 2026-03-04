export interface ExternalSensorData {
    id: string;
    temperature: number;
    humidity: number;
    timestamp: Date;
}

export class ExternalSensorService {
    async fetchFromAPI(sensorId: string): Promise<ExternalSensorData> {
        console.log(`Fetching data for external sensor ${sensorId}`);

        // This is a stub for integration with 3rd party sensor APIs
        return {
            id: sensorId,
            temperature: 22.0,
            humidity: 45,
            timestamp: new Date()
        };
    }
}

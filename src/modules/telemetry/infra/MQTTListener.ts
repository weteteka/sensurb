import { ProcessReading } from "../application/ProcessReading";
import { mqttClient } from "./mqttClient";

export class MQTTListener {
    constructor(private processReading: ProcessReading) { }

    start() {
        console.log("MQTT Listener: Starting...");

        // In a real implementation, we would subscribe to a topic pattern
        // like 'sensors/+/readings'
        mqttClient.subscribe("sensors/+/readings");

        // Mocking an event listener
        // This would typically be a callback from the MQTT client
        this.onMessage("sensors/SN123/readings", JSON.stringify({
            temperature: 25.5,
            fillLevel: 80,
            batteryLevel: 95
        }));
    }

    async onMessage(topic: string, payload: string) {
        try {
            const serialNumber = topic.split('/')[1];
            const data = JSON.parse(payload);

            console.log(`MQTT Listener: Received data for sensor ${serialNumber}`);

            await this.processReading.execute({
                serialNumber,
                temperature: data.temperature,
                fillLevel: data.fillLevel,
                batteryLevel: data.batteryLevel
            });
        } catch (error) {
            console.error("MQTT Listener: Error processing message", error);
        }
    }
}

export class MqttClient {
    connect() {
        console.log("Connecting to MQTT broker...");
    }

    subscribe(topic: string) {
        console.log(`Subscribed to topic: ${topic}`);
    }

    publish(topic: string, message: string) {
        console.log(`Publishing to ${topic}: ${message}`);
    }
}

export const mqttClient = new MqttClient();

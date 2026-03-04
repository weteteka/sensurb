import { Entity } from "@/shared/core/Base";

export interface SensorReadingProps {
    sensorId: number;
    fillLevel?: number;
    temperature?: number;
    batteryLevel?: number;
    createdAt: Date;
}

export class SensorReading extends Entity<SensorReadingProps> {
    private constructor(props: SensorReadingProps, id?: number) {
        super(props, id);
    }

    public static create(props: SensorReadingProps, id?: number): SensorReading {
        return new SensorReading(props, id);
    }

    get sensorId(): number { return this.props.sensorId; }
    get fillLevel(): number | undefined { return this.props.fillLevel; }
    get temperature(): number | undefined { return this.props.temperature; }
    get batteryLevel(): number | undefined { return this.props.batteryLevel; }
    get createdAt(): Date { return this.props.createdAt; }
}

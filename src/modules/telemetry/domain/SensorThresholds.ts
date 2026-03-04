import { ValueObject } from "@/shared/core/Base";

export interface SensorThresholdsProps {
    maxTemperature?: number;
    minTemperature?: number;
    maxFillLevel?: number;
    minFillLevel?: number;
    maxBatteryLevel?: number;
    minBatteryLevel?: number;
}

export class SensorThresholds extends ValueObject<SensorThresholdsProps> {
    private constructor(props: SensorThresholdsProps) {
        super(props);
    }

    public static create(props: SensorThresholdsProps): SensorThresholds {
        return new SensorThresholds(props);
    }

    get maxTemperature(): number | undefined { return this.props.maxTemperature; }
    get minTemperature(): number | undefined { return this.props.minTemperature; }
    get maxFillLevel(): number | undefined { return this.props.maxFillLevel; }
    get minFillLevel(): number | undefined { return this.props.minFillLevel; }
    get maxBatteryLevel(): number | undefined { return this.props.maxBatteryLevel; }
    get minBatteryLevel(): number | undefined { return this.props.minBatteryLevel; }
}

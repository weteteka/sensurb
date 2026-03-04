import { Entity } from "@/shared/core/Base";
import { SensorThresholds } from "./SensorThresholds";

export enum SensorStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BLOCKED = 'blocked'
}

export interface SensorProps {
    companyId: number;
    containerId?: number;
    serialNumber: string;
    apiKeyHash: string;
    status: SensorStatus;
    thresholds?: SensorThresholds;
    installedAt?: Date;
    createdAt: Date;
}

export class Sensor extends Entity<SensorProps> {
    private constructor(props: SensorProps, id?: number) {
        super(props, id);
    }

    public static create(props: SensorProps, id?: number): Sensor {
        return new Sensor(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get containerId(): number | undefined { return this.props.containerId; }
    get serialNumber(): string { return this.props.serialNumber; }
    get apiKeyHash(): string { return this.props.apiKeyHash; }
    get status(): SensorStatus { return this.props.status; }
    get thresholds(): SensorThresholds | undefined { return this.props.thresholds; }
    get installedAt(): Date | undefined { return this.props.installedAt; }
    get createdAt(): Date { return this.props.createdAt; }
}

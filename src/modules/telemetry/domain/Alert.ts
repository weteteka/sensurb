import { Entity } from "@/shared/core/Base";

export enum AlertStatus {
    OPEN = 'open',
    RESOLVED = 'resolved'
}

export interface AlertProps {
    companyId: number;
    sensorId: number;
    type?: string;
    message?: string;
    status: AlertStatus;
    createdAt: Date;
}

export class Alert extends Entity<AlertProps> {
    private constructor(props: AlertProps, id?: number) {
        super(props, id);
    }

    public static create(props: AlertProps, id?: number): Alert {
        return new Alert(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get sensorId(): number { return this.props.sensorId; }
    get type(): string | undefined { return this.props.type; }
    get message(): string | undefined { return this.props.message; }
    get status(): AlertStatus { return this.props.status; }
    get createdAt(): Date { return this.props.createdAt; }
}

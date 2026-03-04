import { Entity } from "@/shared/core/Base";
import { Location } from "./Client";

export enum ContainerStatus {
    ACTIVE = 'active',
    MAINTENANCE = 'maintenance',
    INACTIVE = 'inactive'
}

export interface ContainerProps {
    companyId: number;
    clientId: number;
    code?: string;
    capacity?: number;
    location?: Location;
    status: ContainerStatus;
}

export class Container extends Entity<ContainerProps> {
    private constructor(props: ContainerProps, id?: number) {
        super(props, id);
    }

    public static create(props: ContainerProps, id?: number): Container {
        return new Container(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get clientId(): number { return this.props.clientId; }
    get code(): string | undefined { return this.props.code; }
    get capacity(): number | undefined { return this.props.capacity; }
    get location(): Location | undefined { return this.props.location; }
    get status(): ContainerStatus { return this.props.status; }
}

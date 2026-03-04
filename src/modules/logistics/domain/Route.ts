import { Entity } from "@/shared/core/Base";

export enum RouteStatus {
    PLANNED = 'planned',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed'
}

export interface RouteStopProps {
    routeId: number;
    containerId: number;
    stopOrder: number;
}

export class RouteStop extends Entity<RouteStopProps> {
    private constructor(props: RouteStopProps, id?: number) {
        super(props, id);
    }

    public static create(props: RouteStopProps, id?: number): RouteStop {
        return new RouteStop(props, id);
    }

    get routeId(): number { return this.props.routeId; }
    get containerId(): number { return this.props.containerId; }
    get stopOrder(): number { return this.props.stopOrder; }
}

export interface RouteProps {
    companyId: number;
    name?: string;
    routeDate?: Date;
    status: RouteStatus;
    createdAt: Date;
    stops?: RouteStop[];
}

export class Route extends Entity<RouteProps> {
    private constructor(props: RouteProps, id?: number) {
        super(props, id);
    }

    public static create(props: RouteProps, id?: number): Route {
        return new Route(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get name(): string | undefined { return this.props.name; }
    get routeDate(): Date | undefined { return this.props.routeDate; }
    get status(): RouteStatus { return this.props.status; }
    get createdAt(): Date { return this.props.createdAt; }
    get stops(): RouteStop[] { return this.props.stops || []; }
}

import { Entity, ValueObject } from "@/shared/core/Base";

export interface LocationProps {
    latitude: number;
    longitude: number;
}

export class Location extends ValueObject<LocationProps> {
    private constructor(props: LocationProps) {
        super(props);
    }

    public static create(latitude: number, longitude: number): Location {
        return new Location({ latitude, longitude });
    }

    get latitude(): number { return this.props.latitude; }
    get longitude(): number { return this.props.longitude; }
}

export interface ClientProps {
    companyId: number;
    name: string;
    address?: string;
    location?: Location;
    createdAt: Date;
}

export class Client extends Entity<ClientProps> {
    private constructor(props: ClientProps, id?: number) {
        super(props, id);
    }

    public static create(props: ClientProps, id?: number): Client {
        return new Client(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get name(): string { return this.props.name; }
    get address(): string | undefined { return this.props.address; }
    get location(): Location | undefined { return this.props.location; }
    get createdAt(): Date { return this.props.createdAt; }
}

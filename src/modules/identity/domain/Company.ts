import { AggregateRoot } from "@/shared/core/Base";


export enum CompanyStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    SUSPENDED = 'suspended'
}

export interface CompanyProps {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    status: CompanyStatus;
    createdAt: Date;
}

export class Company extends AggregateRoot<CompanyProps> {
    private constructor(props: CompanyProps, id?: number) {
        super(props, id);
    }

    public static create(props: CompanyProps, id?: number): Company {
        return new Company(props, id);
    }

    get name(): string { return this.props.name; }
    get email(): string | undefined { return this.props.email; }
    get phone(): string | undefined { return this.props.phone; }
    get address(): string | undefined { return this.props.address; }
    get status(): CompanyStatus { return this.props.status; }
    get createdAt(): Date { return this.props.createdAt; }
}

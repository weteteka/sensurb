import { Entity } from "@/shared/core/Base";

export interface UserProps {
    companyId: number;
    name: string;
    email: string;
    passwordHash: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    roleIds?: number[];
}

export class User extends Entity<UserProps> {
    private constructor(props: UserProps, id?: number) {
        super(props, id);
    }

    public static create(props: UserProps, id?: number): User {
        return new User(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get name(): string { return this.props.name; }
    get email(): string { return this.props.email; }
    get passwordHash(): string { return this.props.passwordHash; }
    get status(): 'active' | 'inactive' { return this.props.status; }
    get createdAt(): Date { return this.props.createdAt; }
    get roleIds(): number[] { return this.props.roleIds || []; }
}

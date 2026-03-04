import { Entity } from "@/shared/core/Base";

export interface RoleProps {
    name: string;
}

export class Role extends Entity<RoleProps> {
    private constructor(props: RoleProps, id?: number) {
        super(props, id);
    }

    public static create(props: RoleProps, id?: number): Role {
        return new Role(props, id);
    }

    get name(): string { return this.props.name; }
}

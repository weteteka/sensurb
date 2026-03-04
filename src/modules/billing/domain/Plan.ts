import { Entity } from "@/shared/core/Base";

export interface PlanProps {
    name?: string;
    price?: number;
    maxSensors?: number;
    maxUsers?: number;
}

export class Plan extends Entity<PlanProps> {
    private constructor(props: PlanProps, id?: number) {
        super(props, id);
    }

    public static create(props: PlanProps, id?: number): Plan {
        return new Plan(props, id);
    }

    get name(): string | undefined { return this.props.name; }
    get price(): number | undefined { return this.props.price; }
    get maxSensors(): number | undefined { return this.props.maxSensors; }
    get maxUsers(): number | undefined { return this.props.maxUsers; }
}

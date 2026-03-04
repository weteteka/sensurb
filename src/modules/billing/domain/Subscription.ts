import { Entity } from "@/shared/core/Base";

export enum SubscriptionStatus {
    ACTIVE = 'active',
    EXPIRED = 'expired',
    CANCELLED = 'cancelled'
}

export interface SubscriptionProps {
    companyId: number;
    planId: number;
    startDate?: Date;
    endDate?: Date;
    status: SubscriptionStatus;
}

export class Subscription extends Entity<SubscriptionProps> {
    private constructor(props: SubscriptionProps, id?: number) {
        super(props, id);
    }

    public static create(props: SubscriptionProps, id?: number): Subscription {
        return new Subscription(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get planId(): number { return this.props.planId; }
    get startDate(): Date | undefined { return this.props.startDate; }
    get endDate(): Date | undefined { return this.props.endDate; }
    get status(): SubscriptionStatus { return this.props.status; }
}

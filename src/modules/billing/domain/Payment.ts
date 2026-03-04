import { Entity } from "@/shared/core/Base";

export enum PaymentStatus {
    PAID = 'paid',
    PENDING = 'pending',
    FAILED = 'failed'
}

export interface PaymentProps {
    subscriptionId: number;
    amount?: number;
    paymentDate?: Date;
    method?: string;
    status?: PaymentStatus;
}

export class Payment extends Entity<PaymentProps> {
    private constructor(props: PaymentProps, id?: number) {
        super(props, id);
    }

    public static create(props: PaymentProps, id?: number): Payment {
        return new Payment(props, id);
    }

    get subscriptionId(): number { return this.props.subscriptionId; }
    get amount(): number | undefined { return this.props.amount; }
    get paymentDate(): Date | undefined { return this.props.paymentDate; }
    get method(): string | undefined { return this.props.method; }
    get status(): PaymentStatus | undefined { return this.props.status; }
}

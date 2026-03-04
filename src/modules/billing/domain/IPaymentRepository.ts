import { Payment } from "./Payment";

export interface IPaymentRepository {
    create(payment: Payment): Promise<void>;
    findById(id: number): Promise<Payment | null>;
    findBySubscriptionId(subscriptionId: number): Promise<Payment[]>;
}

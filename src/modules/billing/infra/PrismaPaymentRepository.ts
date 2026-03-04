import { Payment } from "../domain/Payment";
import { IPaymentRepository } from "../domain/IPaymentRepository";

export class PrismaPaymentRepository implements IPaymentRepository {
    async create(payment: Payment): Promise<void> {
        console.log("Prisma: Recording payment for subscription", payment.subscriptionId);
    }

    async findById(id: number): Promise<Payment | null> {
        return null;
    }

    async findBySubscriptionId(subscriptionId: number): Promise<Payment[]> {
        return [];
    }
}

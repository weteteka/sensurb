import { Subscription } from "../domain/Subscription";
import { ISubscriptionRepository } from "../domain/ISubscriptionRepository";

export class PrismaSubscriptionRepository implements ISubscriptionRepository {
    async create(subscription: Subscription): Promise<void> {
        console.log("Prisma: Creating subscription for company", subscription.companyId);
    }

    async update(subscription: Subscription): Promise<void> {
        console.log("Prisma: Updating subscription", subscription.id);
    }

    async findById(id: number): Promise<Subscription | null> {
        return null; // Implementation needed
    }

    async findByCompanyId(companyId: number): Promise<Subscription | null> {
        return null; // Implementation needed
    }
}

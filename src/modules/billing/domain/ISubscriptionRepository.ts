import { Subscription } from "./Subscription";

export interface ISubscriptionRepository {
    create(subscription: Subscription): Promise<void>;
    update(subscription: Subscription): Promise<void>;
    findById(id: number): Promise<Subscription | null>;
    findByCompanyId(companyId: number): Promise<Subscription | null>;
}

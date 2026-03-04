import { IPaymentService, CheckoutSessionInput } from "../domain/IPaymentService";
import { ISubscriptionRepository } from "../domain/ISubscriptionRepository";
import { IPaymentRepository } from "../domain/IPaymentRepository";
import { Subscription, SubscriptionStatus } from "../domain/Subscription";
import { Payment, PaymentStatus } from "../domain/Payment";

export class StripeService implements IPaymentService {
    constructor(
        private subscriptionRepository: ISubscriptionRepository,
        private paymentRepository: IPaymentRepository
    ) { }

    async createCheckoutSession(input: CheckoutSessionInput): Promise<string> {
        console.log(`Stripe: Creating checkout session for company ${input.companyId}, plan ${input.planId}`);
        // Mocking a Stripe checkout URL
        return `https://checkout.stripe.com/pay/session_${Math.random().toString(36).substring(7)}`;
    }

    async handleWebhook(payload: any, signature: string): Promise<void> {
        console.log("Stripe: Handling webhook", payload.type);

        if (payload.type === 'checkout.session.completed') {
            const session = payload.data.object;

            // Safer metadata handling
            const companyId = session.metadata?.companyId;
            const planId = session.metadata?.planId;

            if (!companyId || !planId) {
                console.error("Stripe: Missing metadata in checkout session");
                return;
            }

            const subscription = Subscription.create({
                companyId: Number(companyId),
                planId: Number(planId),
                startDate: new Date(),
                status: SubscriptionStatus.ACTIVE
            });

            await this.subscriptionRepository.create(subscription);

            // Also record the payment
            const payment = Payment.create({
                subscriptionId: subscription.id,
                amount: session.amount_total ? session.amount_total / 100 : 0,
                paymentDate: new Date(),
                method: 'stripe',
                status: PaymentStatus.PAID
            });

            await this.paymentRepository.create(payment);
        }
    }
}

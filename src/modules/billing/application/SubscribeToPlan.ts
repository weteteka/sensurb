import { IPaymentService, CheckoutSessionInput } from "../domain/IPaymentService";

export interface SubscribeToPlanInput extends CheckoutSessionInput { }

export class SubscribeToPlan {
    constructor(private paymentService: IPaymentService) { }

    async execute(input: SubscribeToPlanInput): Promise<string> {
        // Here we could add validation, check if the company already has an active subscription, etc.
        const checkoutUrl = await this.paymentService.createCheckoutSession(input);
        return checkoutUrl;
    }
}

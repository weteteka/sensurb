export interface CheckoutSessionInput {
    companyId: number;
    planId: number;
    successUrl: string;
    cancelUrl: string;
}

export interface IPaymentService {
    createCheckoutSession(input: CheckoutSessionInput): Promise<string>;
    handleWebhook(payload: any, signature: string): Promise<void>;
}

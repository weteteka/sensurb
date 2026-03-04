import { IPaymentService } from "../domain/IPaymentService";

export interface HandleWebhookInput {
    payload: any;
    signature: string;
}

export class HandleWebhook {
    constructor(private paymentService: IPaymentService) { }

    async execute(input: HandleWebhookInput): Promise<void> {
        await this.paymentService.handleWebhook(input.payload, input.signature);
    }
}

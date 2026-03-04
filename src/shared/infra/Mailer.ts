export interface MailOptions {
    to: string;
    subject: string;
    body: string;
}

export class Mailer {
    async sendMail(options: MailOptions): Promise<void> {
        console.log(`Mailer: Sending email to ${options.to} - Subject: ${options.subject}`);
        // Integration with SendGrid/AWS SES/etc would go here
    }
}

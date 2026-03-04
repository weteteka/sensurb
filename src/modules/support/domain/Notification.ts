import { Entity } from "@/shared/core/Base";

export enum NotificationChannel {
    EMAIL = 'email',
    SMS = 'sms',
    WHATSAPP = 'whatsapp',
    PUSH = 'push'
}

export enum NotificationStatus {
    SENT = 'sent',
    FAILED = 'failed'
}

export interface NotificationProps {
    companyId: number;
    userId: number;
    channel?: NotificationChannel;
    message?: string;
    status?: NotificationStatus;
    createdAt: Date;
}

export class Notification extends Entity<NotificationProps> {
    private constructor(props: NotificationProps, id?: number) {
        super(props, id);
    }

    public static create(props: NotificationProps, id?: number): Notification {
        return new Notification(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get userId(): number { return this.props.userId; }
    get channel(): NotificationChannel | undefined { return this.props.channel; }
    get message(): string | undefined { return this.props.message; }
    get status(): NotificationStatus | undefined { return this.props.status; }
    get createdAt(): Date { return this.props.createdAt; }
}

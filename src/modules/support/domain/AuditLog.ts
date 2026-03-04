import { Entity } from "@/shared/core/Base";

export interface AuditLogProps {
    companyId?: number;
    userId?: number;
    action?: string;
    ipAddress?: string;
    createdAt: Date;
}

export class AuditLog extends Entity<AuditLogProps> {
    private constructor(props: AuditLogProps, id?: number) {
        super(props, id);
    }

    public static create(props: AuditLogProps, id?: number): AuditLog {
        return new AuditLog(props, id);
    }

    get companyId(): number | undefined { return this.props.companyId; }
    get userId(): number | undefined { return this.props.userId; }
    get action(): string | undefined { return this.props.action; }
    get ipAddress(): string | undefined { return this.props.ipAddress; }
    get createdAt(): Date { return this.props.createdAt; }
}

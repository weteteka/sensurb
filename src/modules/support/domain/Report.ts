import { Entity } from "@/shared/core/Base";

export interface ReportProps {
    companyId: number;
    title?: string;
    fileUrl?: string;
    generatedAt: Date;
}

export class Report extends Entity<ReportProps> {
    private constructor(props: ReportProps, id?: number) {
        super(props, id);
    }

    public static create(props: ReportProps, id?: number): Report {
        return new Report(props, id);
    }

    get companyId(): number { return this.props.companyId; }
    get title(): string | undefined { return this.props.title; }
    get fileUrl(): string | undefined { return this.props.fileUrl; }
    get generatedAt(): Date { return this.props.generatedAt; }
}

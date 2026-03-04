import { Alert } from "./Alert";

export interface IAlertRepository {
    create(alert: Alert): Promise<void>;
    update(alert: Alert): Promise<void>;
    findById(id: number): Promise<Alert | null>;
    findAllByCompanyId(companyId: number): Promise<Alert[]>;
    findAllBySensorId(sensorId: number): Promise<Alert[]>;
    findAllByStatus(status: string): Promise<Alert[]>;
}

import { Sensor } from "./Sensor";

export interface ISensorRepository {
    create(sensor: Sensor): Promise<void>;
    update(sensor: Sensor): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Sensor | null>;
    findBySerialNumber(serialNumber: string): Promise<Sensor | null>;
    findAllByContainerId(containerId: number): Promise<Sensor[]>;
    findAllByCompanyId(companyId: number): Promise<Sensor[]>;
}

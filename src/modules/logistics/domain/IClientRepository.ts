import { Client } from "./Client";

export interface IClientRepository {
    create(client: Client): Promise<void>;
    update(client: Client): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Client | null>;
    findAllByCompanyId(companyId: number): Promise<Client[]>;
}

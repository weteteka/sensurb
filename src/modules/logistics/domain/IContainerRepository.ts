import { Container } from "./Container";

export interface IContainerRepository {
    create(container: Container): Promise<void>;
    update(container: Container): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Container | null>;
    findByCode(code: string): Promise<Container | null>;
    findAllByClientId(clientId: number): Promise<Container[]>;
    findAllByCompanyId(companyId: number): Promise<Container[]>;
}

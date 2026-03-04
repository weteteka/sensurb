import { Company } from "./Company";

export interface ICompanyRepository {
    create(company: Company): Promise<void>;
    update(company: Company): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Company | null>;
    findAll(): Promise<Company[]>;
}

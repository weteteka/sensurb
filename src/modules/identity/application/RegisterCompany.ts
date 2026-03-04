import { Company, CompanyStatus } from "../domain/Company";
import { ICompanyRepository } from "../domain/ICompanyRepository";
import { IAuthService } from "../domain/IAuthService";

export interface RegisterCompanyInput {
    name: string;
    email: string;
    phone?: string;
    address?: string;
}

export type RegisterCompanyOutput = Company;

export class RegisterCompany {
    constructor(
        private companyRepository: ICompanyRepository,
        private authService: IAuthService
    ) { }

    async execute(input: RegisterCompanyInput): Promise<RegisterCompanyOutput> {
        const company = Company.create({
            name: input.name,
            email: input.email,
            phone: input.phone,
            address: input.address,
            status: CompanyStatus.ACTIVE,
            createdAt: new Date(),
        });

        await this.companyRepository.create(company);

        // Here we could also trigger user creation or other side effects

        return company;
    }
}

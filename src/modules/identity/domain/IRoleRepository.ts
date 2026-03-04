import { Role } from "./Role";

export interface IRoleRepository {
    create(role: Role): Promise<void>;
    update(role: Role): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Role | null>;
    findByName(name: string): Promise<Role | null>;
}

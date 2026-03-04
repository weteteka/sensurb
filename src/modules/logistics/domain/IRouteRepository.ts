import { Route } from "./Route";

export interface IRouteRepository {
    create(route: Route): Promise<void>;
    update(route: Route): Promise<void>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Route | null>;
    findAllByCompanyId(companyId: number): Promise<Route[]>;
    findAllByStatus(status: string): Promise<Route[]>;
}

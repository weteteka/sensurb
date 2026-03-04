import { Route, RouteStatus, RouteStop } from "../domain/Route";
import { IRouteRepository } from "../domain/IRouteRepository";

export interface CreateRouteInput {
    companyId: number;
    name?: string;
    routeDate?: Date;
    stops: {
        containerId: number;
        stopOrder: number;
    }[];
}

export type CreateRouteOutput = Route;

export class CreateRoute {
    constructor(private routeRepository: IRouteRepository) { }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const stops = input.stops.map(stop => RouteStop.create({
            routeId: 0,
            containerId: stop.containerId,
            stopOrder: stop.stopOrder,
        }));

        const route = Route.create({
            companyId: input.companyId,
            name: input.name,
            routeDate: input.routeDate,
            status: RouteStatus.PLANNED,
            createdAt: new Date(),
            stops: stops,
        });

        await this.routeRepository.create(route);

        return route;
    }
}

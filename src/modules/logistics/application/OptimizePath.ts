import { IRouteRepository } from "../domain/IRouteRepository";
import { IContainerRepository } from "../domain/IContainerRepository";
import { GoogleMapsService } from "../infra/GoogleMapsService";
import { Location } from "../domain/Client";

export interface OptimizePathInput {
    routeId: number;
}

export class OptimizePath {
    constructor(
        private routeRepository: IRouteRepository,
        private containerRepository: IContainerRepository,
        private googleMapsService: GoogleMapsService
    ) { }

    async execute(input: OptimizePathInput): Promise<void> {
        const route = await this.routeRepository.findById(input.routeId);

        if (!route) {
            throw new Error(`Route with id ${input.routeId} not found`);
        }

        const stops = route.stops;
        if (stops.length <= 1) return;

        // Fetch all container locations for the stops
        const locations: Location[] = [];
        for (const stop of stops) {
            const container = await this.containerRepository.findById(stop.containerId);
            if (container && container.location) {
                locations.push(container.location);
            } else {
                throw new Error(`Container ${stop.containerId} location not found`);
            }
        }

        // Optimize the order
        const optimizedIndices = await this.googleMapsService.optimizeRoute(locations);

        // Reorder stops based on optimized indices
        const optimizedStops = optimizedIndices.map((idx, order) => {
            const originalStop = stops[idx];
            // We need to access props or recreate since RouteStop is an entity
            // In a real scenario, we might have a 'reorder' method on the Route Aggregate
            return (originalStop as any).constructor.create({
                ...originalStop.props,
                stopOrder: order + 1
            });
        });

        // Update the route aggregate
        (route as any).props.stops = optimizedStops;

        await this.routeRepository.update(route);
    }
}

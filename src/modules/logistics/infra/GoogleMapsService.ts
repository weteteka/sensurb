import { Location } from "../domain/Client";

export interface DistanceMatrixResult {
    distance: number; // in meters
    duration: number; // in seconds
}

export class GoogleMapsService {
    async getDistance(origin: Location, destination: Location): Promise<DistanceMatrixResult> {
        console.log(`Calculating distance between (${origin.latitude}, ${origin.longitude}) and (${destination.latitude}, ${destination.longitude})`);

        // Using Haversine formula for a basic mock calculation
        const R = 6371e3; // metres
        const φ1 = origin.latitude * Math.PI / 180;
        const φ2 = destination.latitude * Math.PI / 180;
        const Δφ = (destination.latitude - origin.latitude) * Math.PI / 180;
        const Δλ = (destination.longitude - origin.longitude) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = R * c;

        return {
            distance,
            duration: distance / 13.8 // Assume 50km/h average speed
        };
    }

    async optimizeRoute(locations: Location[]): Promise<number[]> {
        console.log(`Optimizing route for ${locations.length} locations`);

        // Simple Nearest Neighbor Algorithm for TSP (Traveling Salesperson Problem)
        const unvisited = locations.map((_, index) => index);
        const tour: number[] = [unvisited.shift()!];

        while (unvisited.length > 0) {
            let lastIdx = tour[tour.length - 1];
            let nearestIdx = -1;
            let minDist = Infinity;

            for (let i = 0; i < unvisited.length; i++) {
                const currentIdx = unvisited[i];
                const res = await this.getDistance(locations[lastIdx], locations[currentIdx]);
                if (res.distance < minDist) {
                    minDist = res.distance;
                    nearestIdx = i;
                }
            }

            tour.push(unvisited.splice(nearestIdx, 1)[0]);
        }

        return tour;
    }
}

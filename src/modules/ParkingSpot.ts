import { VehicleType } from "../../types.js";
import { Vehicle } from "./Vehicle.js";

export default class ParkingSpot {
    public id : number;
    public vehicleType : VehicleType;
    private available: boolean;
    private vehicle: Vehicle | null = null;

    constructor(id: number, vehicleType: VehicleType) {
        this.id = id;
        this.vehicleType = vehicleType;
        this.available = true;
    }

    // move this method to service
    public parkVehicle(vehicle: Vehicle) {
        if(this.available) {
            this.available = false;
            this.vehicle = vehicle;
        }
        // throw error that vehicle can't be parked
    }

    // move this method to service
    public unparkVehicle() {
        this.vehicle = null;
        this.available = true;
    }

    public getParkedVehicle(): Vehicle {
        return this.vehicle;
    }

    public isAvailable(): boolean {
        return this.available;
    }
}
import { VehicleType } from "../../types.js";
import { Level } from "./Level.js";
import { Vehicle } from "./Vehicle.js";

export class ParkingLot {
    public levels: Level[];
    private static instance: ParkingLot;

    private constructor() {
        this.levels = [];
    }

    addLevel(level: Level) {
        this.levels.push(level);
    }

    public static getInstance(): ParkingLot {
        if (!ParkingLot.instance) {
          ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
      }

    public getAvailableSpots(floor: number, vehicleType: VehicleType): number {
        for(const level of this.levels) {
            if(level.floor == floor) {
                return level.getAvailableParkingSpots(vehicleType);
            }
        }
        return 0;
        // throw error if invalid level
    }

    public parkVehicle(vehicle: Vehicle) {
        for(const level of this.levels) {
            if(level.getAvailableParkingSpots(vehicle.vehicleType) > 0) {
                level.parkVehicle(vehicle);
                break;
            } 
        }

        // throw error if no parking spots are available
    }

    public unparkVehicle(vehicle: Vehicle) {
        for(const level of this.levels) {
            level.unparkVehicle(vehicle);
        }
    }

    public displayAvailability() {
        for(const level of this.levels) {
            level.displayAvailability();
        }
    }

}
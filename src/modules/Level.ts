import ParkingSpot from "./ParkingSpot.js";
import { VehicleType } from "../../types.js";
import { Vehicle } from "./Vehicle.js";
export class Level {
    public floor: number;
    private parkingSpots: ParkingSpot[];
  
    constructor(floor: number, numSpots: number) {
      this.floor = floor;
      this.parkingSpots = [];
  
      // Ratio of spots: 50% for bikes, 40% for cars, 10% for trucks.
      const spotsForBikes = 0.50;
      const spotsForCars = 0.40;
  
      const numBikes = Math.floor(numSpots * spotsForBikes);
      const numCars = Math.floor(numSpots * spotsForCars);
  
      // Create spots for motorcycles.
      for (let i = 1; i <= numBikes; i++) {
        this.parkingSpots.push(new ParkingSpot(i, VehicleType.BIKE));
      }
      // Create spots for cars.
      for (let i = numBikes + 1; i <= numBikes + numCars; i++) {
        this.parkingSpots.push(new ParkingSpot(i, VehicleType.CAR));
      }
      // Create spots for trucks.
      for (let i = numBikes + numCars + 1; i <= numSpots; i++) {
        this.parkingSpots.push(new ParkingSpot(i, VehicleType.TRUCK));
      }
    }
  
    // Parks a vehicle in the first available spot of matching type.
    parkVehicle(vehicle: Vehicle): boolean {
      for (const spot of this.parkingSpots) {
        if (spot.isAvailable() && spot.vehicleType === vehicle.vehicleType) {
          spot.parkVehicle(vehicle);
          return true;
        }
      }
      return false;
    }
  
    // Unparks a given vehicle from the spot where it's parked.
    unparkVehicle(vehicle: Vehicle): boolean {
      for (const spot of this.parkingSpots) {
        if (!spot.isAvailable() && spot.vehicleType === vehicle.vehicleType) {
          spot.unparkVehicle();
          return true;
        }
      }
      return false;
    }
  
    // Displays the availability status of all spots on the level.
    displayAvailability(): void {
      console.log(`Level ${this.floor} Availability:`);
      for (const spot of this.parkingSpots) {
        console.log(
          `Spot ${spot.id}: ` +
            (spot.isAvailable() ? "Available For Parking" : "Occupied By " + spot.getParkedVehicle().regNo)
        );
      }
    }

    getAvailableParkingSpots(vehicleType: VehicleType): number {
        let availableSpots = 0;
        for(const parkingSpot of this.parkingSpots) {
            if(parkingSpot.isAvailable() && parkingSpot.vehicleType == vehicleType) {
                availableSpots++;
            }
        }
        return availableSpots;
    }
  }
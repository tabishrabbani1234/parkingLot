import { ParkingLot } from "./ParkingLot.js";
import { Level } from "./Level.js";
import { VehicleType } from "../../types.js";
import { Vehicle } from "./Vehicle.js";

class ParkingLotDemo {
  public static run(): void {
    // Get the singleton instance of ParkingLot.
    const parkingLot = ParkingLot.getInstance();
    // Add two levels with specified number of spots.
    parkingLot.addLevel(new Level(1, 10));
    parkingLot.addLevel(new Level(2, 8));

    // Create vehicles.
    const car: Vehicle = new Vehicle("ABC123", VehicleType.CAR);
    const truck: Vehicle = new Vehicle("XYZ789", VehicleType.TRUCK);
    const motorcycle: Vehicle = new Vehicle("M1234", VehicleType.BIKE);

    // Park vehicles.
    parkingLot.parkVehicle(car);
    parkingLot.parkVehicle(truck);
    parkingLot.parkVehicle(motorcycle);

    // Display current availability.
    console.log("=== Availability after parking vehicles ===");
    parkingLot.displayAvailability();

    // Unpark the motorcycle.
    parkingLot.unparkVehicle(motorcycle);

    // Display updated availability.
    console.log("=== Availability after unparking motorcycle ===");
    parkingLot.displayAvailability();
  }
}

// Run the demo.
ParkingLotDemo.run();

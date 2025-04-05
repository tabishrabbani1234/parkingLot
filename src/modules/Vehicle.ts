import { VehicleType } from "../../types.js";

export class Vehicle {
    public regNo: string;
    public vehicleType: VehicleType;

    constructor(regNo: string, vehicleType: VehicleType) {
        this.regNo = regNo;
        this.vehicleType = vehicleType;
    }
}
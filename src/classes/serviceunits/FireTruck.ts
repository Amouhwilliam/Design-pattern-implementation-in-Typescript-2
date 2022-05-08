import Disaster from "../disaster/Disaster";
import { ServiceUnit } from "./ServiceUnit";

export class FireTruck implements ServiceUnit{

    private vehicleNo: string;
    private longitude: string;
    private lattitude: string;
    private driverName: string;
    private phoneNumber: string;
    private disaster: Disaster | undefined;

    constructor(vehiNo: string, lat:string,lon:string,driver:string,phone:string){
        this.vehicleNo = vehiNo;
        this.lattitude = lat;
        this.longitude = lon;
        this.driverName = driver;
        this.phoneNumber = phone;
    }
    ReadDisasterSituation(status:string): void {
        console.log("Fire truck:" +this.vehicleNo+" Recieve update from disaster as :" +status);
    }

    AssignForDisaster(disater: Disaster): void {
        console.log("Assigned for "+ disater.type + "At Lat :"+disater.latitude+ " Long: " +disater.longitude);
        this.disaster?.AddToLog("Vehicle Reported "+this.vehicleNo);
        this.disaster?.ownCareTaker.AddMemento(this.disaster.SaveCurrentData())
        this.disaster = disater;
    }

    DisplayOfficerInfo(): void {
        console.log("FireTruck Vehicle No "+this.vehicleNo + "Driving officer : "+ this.driverName)
    }



}

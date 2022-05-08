import Disaster from "../disaster/Disaster";
import { ServiceUnit } from "./ServiceUnit";

export class PoliceOfficer implements ServiceUnit{

    private officerNo: string;
    private longitude: string;
    private lattitude: string;
    private officerName: string;
    private phoneNumber: string;
    public disaster: Disaster | undefined;

    constructor(officerNo: string, lat:string,lon:string,name:string,phone:string){
        this.officerNo = officerNo;
        this.lattitude = lat;
        this.longitude = lon;
        this.officerName = name;
        this.phoneNumber = phone;
        console.log("Polic Officer Created "+name);
    }

    ReadDisasterSituation(status:string): void {
        console.log("Police Officer:" +this.officerName+" Recieve update from disaster as :" +status);
    }

    AssignForDisaster(disater: Disaster): void {
        console.log("Assigned for "+ disater.type + "At Lat :"+disater.latitude+ " Long: " +disater.longitude);
        this.disaster?.AddToLog("Officer Reported "+this.officerNo);
        this.disaster?.ownCareTaker.AddMemento(this.disaster.SaveCurrentData())
        this.disaster = disater;
    }

    DisplayOfficerInfo(): void {
        console.log("Police Officer No "+this.officerNo + " Name of the officer : "+ this.officerName)
    }



}

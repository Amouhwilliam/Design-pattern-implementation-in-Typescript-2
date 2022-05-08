import Disaster from "../disaster/Disaster";
import { ServiceUnit } from "./ServiceUnit";

export class FireDepartment implements ServiceUnit{

    private  memberList: Array<ServiceUnit> = [];
    deptname = ""

    constructor(deptName: string, lat:string,lon:string,officer:string,phone:string){
        this.deptname = deptName;
    }
    ReadDisasterSituation(status:string): void {
        console.log("Fire Department :" +this.deptname+" Recieve update from disaster as :" +status);
    }

    AssignForDisaster(disater: Disaster): void {
        this.memberList.forEach(mem => {
            mem.AssignForDisaster(disater);
        });
    }

    DisplayOfficerInfo(): void {
        this.memberList.forEach(mem => {
            mem.DisplayOfficerInfo();
        });
    }



}

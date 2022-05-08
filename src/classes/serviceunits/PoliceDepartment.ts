import Disaster from "../disaster/Disaster";
import { ServiceUnit } from "./ServiceUnit";

export class PoliceDepartment implements ServiceUnit{

    private  memberList: Array<ServiceUnit> = [];
    depName = ""

    constructor(deptName: string, lat:string,lon:string,officer:string,phone:string){
        console.log("Police Department Created as "+deptName);
        this.depName = deptName;
    }

    ReadDisasterSituation(status:string): void {
        console.log("Police Department:"+this.depName+" Recieved update from disaster as :" +status);
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

    AddMember(newMember : ServiceUnit){
        console.log("New member has been added to department :"+ this.depName)
        this.memberList.push(newMember)
    }



}

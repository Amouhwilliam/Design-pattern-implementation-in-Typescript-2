import Disaster from "../disaster/Disaster";

export interface ServiceUnit {
    AssignForDisaster(disater: Disaster): void;
    DisplayOfficerInfo(): void;
    ReadDisasterSituation(status:string): void;
}
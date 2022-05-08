import { ServiceUnit } from "../serviceunits/ServiceUnit";

export interface Subject {
    RegisterServiceUnit(observer: ServiceUnit): void;
    DeregisterServiceUnit(observer:ServiceUnit): void;
    NotifyServiceUnits(status:string): void;
}
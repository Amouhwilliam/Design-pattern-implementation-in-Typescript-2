import { ServiceUnit } from "../serviceunits/ServiceUnit";
import { DisasterCareTaker } from "./DisasterCareTaker";
import { Memento } from "./Memento";
import { Subject } from "./Subject";
import NotificationDirector from "../Notifications/NotificationDirector";
import {NotificationEmitter} from "../Notifications/NotificationEventEmitter";

const notificationEmitter = new NotificationEmitter();

export default class Disaster implements Subject {
    public ownCareTaker: DisasterCareTaker ;
    latitude : string = "0.000";
    longitude: string = "0.000";
    type: string = "0.000"
    level = 1;
    public disasterJson  ={log:["Disater Pre Detected"],state:"PRE_DETECT",level:1}
    private serviceUnitList: Array<ServiceUnit> = [];

    constructor(careTaker:DisasterCareTaker,type:string,lat:string,long:string){
        this.ownCareTaker = careTaker;
        this.type = type;
        this.latitude = lat;
        this.longitude = long;

        // Here we use the event based synchronous pattern to listen to an event 
        //in order to send notification 
        notificationEmitter.on('sendNotification', async () => {
           await this.SendPublicNotificationAlerts();
        });
    }

    RegisterServiceUnit(observer: ServiceUnit): void {
        this.serviceUnitList.push(observer);
    }
    DeregisterServiceUnit(observer: ServiceUnit): void {
        //remove from disaster
    }
    NotifyServiceUnits(status:string): void {
        this.serviceUnitList.forEach(observer => {
            observer.ReadDisasterSituation(status)
        });
    }

    ChangeLevel(level:number){
        console.log("Servie unit changed the level of disaster to level :" +level)
          this.level = level;
          //We use Event base asynchronous pattern to trigger an event 
          notificationEmitter.emit('sendNotification');

          this.NotifyServiceUnits("Level Changed to "+this.level+ " "+this.type+" Disaster in Latitude: "+this.latitude+" Longitude:"+this.longitude);
          this.AddToLog("Level Changed to "+level);
          this.SaveCurrentData();
    }

    AddToLog(entry:string){
        this.disasterJson.log.push(entry);
    }

    SaveCurrentData(): Memento{
        console.log("Saving memento of Disaster object");
        let newObj = JSON.parse(JSON.stringify(this.disasterJson))

        return new Memento(newObj);
    }

    RestoreData(memento: Memento){
        this.disasterJson = memento.getJson();
    }

    async SendPublicNotificationAlerts(){
        
        const notifDirector = new NotificationDirector()
        if (this.level == 1){
            notifDirector.createFirstLevelNotification("Deggendorf",['rob.japan@gmail.com', 'louis.tuc@hotmail.com'],"Level 1 "+this.type+" Happening around "+
            "Latitude :" +this.latitude+ "Longitude:"+ this.longitude)
        }
        if (this.level == 2){
            notifDirector.createSecondLevelNotification("Deggendorf",['rob.japan@gmail.com', 'louis.tuc@hotmail.com'],[989067532091, 91234661876],"Level 2"+this.type+" Happening around "+
            "Latitude :" +this.latitude+ "Longitude:"+ this.longitude)
        }
        if (this.level == 3){
            notifDirector.createThirdLevelNotification( // put a condition with disaster level
                'Freiburg', 
                ['rob.japan@gmail.com', 'louis.tuc@hotmail.com'],
                [989067532091, 91234661876],
                [
                    {
                        name: 'Tokyo Luc',
                        frequency: 105.2
                    },
                    {
                        name: 'Kyoto Prone',
                        frequency: 103.8
                    }
                ],
                "Level 3 "+this.type+" Happening around "+
            "Latitude :" +this.latitude+ "Longitude:"+ this.longitude
            )
        }
        
        
    }
}
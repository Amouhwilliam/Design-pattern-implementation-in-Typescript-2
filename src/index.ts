import Disaster from "./classes/disaster/Disaster";
import { DisasterCareTaker } from "./classes/disaster/DisasterCareTaker";
import { InputAnalyzeAdapter } from "./classes/sensors/analyzers/InputAnalyzeAdapter";
import EarthQuakeSensor from "./classes/sensors/EarthQuakeSensor";
import ImageDetectSensor from "./classes/sensors/ImageDetectSensor";
import PublicInput from "./classes/sensors/PublicInfo";
import { Sensor } from "./classes/sensors/Sensor";
import SmokeSensor from "./classes/sensors/SmokeSensor";
import WaterLevelSensor from "./classes/sensors/WaterLevelSensor";
import { PoliceCar } from "./classes/serviceunits/PoliceCar";
import { PoliceDepartment } from "./classes/serviceunits/PoliceDepartment";
import { PoliceOfficer } from "./classes/serviceunits/PoliceOfficer";

// the Notification part is implementing Builder Pattern
console.log("Starting the main Class");

console.log("Positioning the Sensors");

//Configure the sensors and add sensor objects with their locations latitude , longitude
const sensor1  = new EarthQuakeSensor("48.8414","12.9572");
//const sensor2  = new EarthQuakeSensor("48.8521","12.6523");
const sensor3  = new WaterLevelSensor("49.2321","11.2113");
const sensor4  = new SmokeSensor("49.9921","14.2413");
const sensor5  = new ImageDetectSensor("48.2121","11.2997");
//const sensor6  = new PublicInput("49.8341","14.2113");

let sensorList: Array<Sensor> = []; //list to keep the sensors. All added sensors will be here.
let disasterList: Array<Disaster> = []; //list to keep the disaster. All disasters creeted will be here.

sensorList.push(sensor1); //Add sensor to sensor list
//sensorList.push(sensor2);
sensorList.push(sensor3);
sensorList.push(sensor4);
sensorList.push(sensor5);
//sensorList.push(sensor6);

const analyzeadapter = new InputAnalyzeAdapter();

const policeDep1 = new PoliceDepartment("Deggendorf City","48.2211","13.2323","John Doe","0112653434");
const policeOfficer1 = new PoliceOfficer("PO12312","49.2131","12.2321","Agent Molder","0774964212");
const policeOfficer2 = new PoliceOfficer("PO4412","49.2131","12.2321","Agent Skully","077493412");
const policeCar1 = new PoliceCar("DEG-AA-121","48.1232","12.2167","Wan Bissaka","0775324232");

//Add officers to the Department
policeDep1.AddMember(policeOfficer1);
policeDep1.AddMember(policeCar1);

//for each 5 seconds system will check for sensor outputs //loop is commented for the use case
const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            //Disaster Is Detected
            //Disaster Care Taker Object is created
            const disCareTaker = new DisasterCareTaker();

            //Disaster Object is Created
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            //Add to the Disaster List
            disasterList.push(disaster);

            //Adding Service units to the disaster observers list
            disaster.RegisterServiceUnit(policeDep1);
            disaster.RegisterServiceUnit(policeCar1);

            //Notifying Service Units about disaster
            disaster.NotifyServiceUnits("Level "+result.level+ " "+disaster.type+" Disaster has occured in Latitude: "+result.lat+" Longitude:"+result.lon)

            //Notifying Public about disaster
            disaster.SendPublicNotificationAlerts();
            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
}, 5000) //loop is commented for the use case

 /*/--------------------------------------------------USE CASE 1 ------------------------------------------
//for each 5 seconds system will check for sensor outputs
const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            const disCareTaker = new DisasterCareTaker()
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            disasterList.push(disaster);
            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
}, 5000)

*/

/*/--------------------------------------------------USE CASE 2 ------------------------------------------

//Service Unit Creation
const policeDep1 = new PoliceDepartment("Deggendorf City","48.2211","13.2323","John Doe","0112653434");
const policeOfficer1 = new PoliceOfficer("PO12312","49.2131","12.2321","Agent Molder","0774964212");
const policeOfficer2 = new PoliceOfficer("PO4412","49.2131","12.2321","Agent Skully","077493412");
const policeCar1 = new PoliceCar("DEG-AA-121","48.1232","12.2167","Wan Bissaka","0775324232");

//Add officers to the Department
policeDep1.AddMember(policeOfficer1);
policeDep1.AddMember(policeCar1);

//for each 5 seconds system will check for sensor outputs //loop is commented for the use case
//const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            //Disaster Is Detected
            //Disaster Care Taker Object is created
            const disCareTaker = new DisasterCareTaker();

            //Disaster Object is Created
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            //Add to the Disaster List
            disasterList.push(disaster);

            //Adding Service units to the disaster observers list
            disaster.RegisterServiceUnit(policeDep1);
            disaster.RegisterServiceUnit(policeCar1);

            //Notifying Service Units about disaster
            disaster.NotifyServiceUnits("Level "+result.level+ " "+disaster.type+" Disaster has occured in Latitude: "+result.lat+" Longitude:"+result.lon)

            //Notifying Public about disaster
            disaster.SendPublicNotificationAlerts();
            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
//}, 50000) //loop is commented for the use case
*/

/*/--------------------------------------------------USE CASE 3 ------------------------------------------

//Service Unit Creation
const policeDep1 = new PoliceDepartment("Deggendorf City","48.2211","13.2323","John Doe","0112653434");
const policeOfficer1 = new PoliceOfficer("PO12312","49.2131","12.2321","Agent Molder","0774964212");
const policeOfficer2 = new PoliceOfficer("PO4412","49.2131","12.2321","Agent Skully","077493412");
const policeCar1 = new PoliceCar("DEG-AA-121","48.1232","12.2167","Wan Bissaka","0775324232");

//Add officers to the Department
policeDep1.AddMember(policeOfficer1);
policeDep1.AddMember(policeCar1);

//for each 5 seconds system will check for sensor outputs //loop is commented for the use case
//const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            //Disaster Is Detected
            //Disaster Care Taker Object is created
            const disCareTaker = new DisasterCareTaker();

            //Disaster Object is Created
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            //Add to the Disaster List
            disasterList.push(disaster);

            //Adding Service units to the disaster observers list
            disaster.RegisterServiceUnit(policeDep1);
            disaster.RegisterServiceUnit(policeOfficer2);

            //assigning service units in disaster
            policeDep1.AssignForDisaster(disaster);
            policeOfficer2.AssignForDisaster(disaster);

            //Notifying Service Units about disaster
            disaster.NotifyServiceUnits("Level "+result.level+ " "+disaster.type+" Disaster has occured in Latitude: "+result.lat+" Longitude:"+result.lon)

            //Notifying Public about disaster
            //disaster.SendPublicNotificationAlerts(); //this is commented for this use case
            
            //police officer change the level of disaster to 2
            policeOfficer2.disaster?.ChangeLevel(2);
            


            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
//}, 50000) //loop is commented for the use case
*/

/*/--------------------------------------------------USE CASE 4 ------------------------------------------

//Service Unit Creation
const policeDep1 = new PoliceDepartment("Deggendorf City","48.2211","13.2323","John Doe","0112653434");
const policeOfficer1 = new PoliceOfficer("PO12312","49.2131","12.2321","Agent Molder","0774964212");
const policeOfficer2 = new PoliceOfficer("PO4412","49.2131","12.2321","Agent Skully","077493412");
const policeCar1 = new PoliceCar("DEG-AA-121","48.1232","12.2167","Wan Bissaka","0775324232");

//Add officers to the Department
policeDep1.AddMember(policeOfficer1);
policeDep1.AddMember(policeCar1);

//for each 5 seconds system will check for sensor outputs //loop is commented for the use case
//const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            //Disaster Is Detected
            //Disaster Care Taker Object is created
            const disCareTaker = new DisasterCareTaker();

            //Disaster Object is Created
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            //Add to the Disaster List
            disasterList.push(disaster);

            //Adding Service units to the disaster observers list
            disaster.RegisterServiceUnit(policeDep1);
            disaster.RegisterServiceUnit(policeOfficer2);

            //assigning service units in disaster
            policeDep1.AssignForDisaster(disaster);
            policeOfficer2.AssignForDisaster(disaster);

            //Notifying Service Units about disaster
            disaster.NotifyServiceUnits("Level "+result.level+ " "+disaster.type+" Disaster has occured in Latitude: "+result.lat+" Longitude:"+result.lon)

            //saving initial state of disaster
            disaster.ownCareTaker.AddMemento(disaster.SaveCurrentData());
            //Notifying Public about disaster
            //disaster.SendPublicNotificationAlerts(); //this is commented for this use case
            
            //police officer add wrong estimation
            policeOfficer2.disaster?.AddToLog("Damage is worth : 5000EUR");


            policeOfficer2.disaster?.ownCareTaker.AddMemento(policeOfficer2.disaster?.SaveCurrentData()); //save the data

            console.log("Data after saving..")
            console.log(policeOfficer2.disaster?.disasterJson)

            //Police officer Undo the data
            disaster.disasterJson = policeOfficer2.disaster?.ownCareTaker.Undo()?.getJson();

            //console.log(policeOfficer2.disaster?.disasterJson)

            //disaster.disasterJson = policeOfficer2.disaster?.ownCareTaker.Undo()?.getJson();
            console.log("Data after Undo..")
            console.log(policeOfficer2.disaster?.disasterJson)
            
            policeOfficer2.disaster?.AddToLog("Damage is worth : 9000EUR");
            policeOfficer2.disaster?.ownCareTaker.AddMemento(policeOfficer2.disaster?.SaveCurrentData()); //save the data
            console.log("Data after saving Again..")
            console.log(policeOfficer2.disaster?.disasterJson)
            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
//}, 50000) //loop is commented for the use case
*/


/*//--------------------------------------------------USE CASE 5 ------------------------------------------

//Service Unit Creation
const policeDep1 = new PoliceDepartment("Deggendorf City","48.2211","13.2323","John Doe","0112653434");
const policeOfficer1 = new PoliceOfficer("PO12312","49.2131","12.2321","Agent Molder","0774964212");
const policeOfficer2 = new PoliceOfficer("PO4412","49.2131","12.2321","Agent Skully","077493412");
const policeCar1 = new PoliceCar("DEG-AA-121","48.1232","12.2167","Wan Bissaka","0775324232");

//Add officers to the Department
policeDep1.AddMember(policeOfficer1);
policeDep1.AddMember(policeCar1);

//for each 5 seconds system will check for sensor outputs //loop is commented for the use case
//const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
     console.log("Time Stamp :" + Date() + " Checking for Sensor Output Started...")
    //For each sensor in the list
	sensorList.forEach(sensor => {
        //analyze adapter will check for the putputs
        analyzeadapter.ChangeSensor(sensor);
        const result:any = analyzeadapter.AnalyzeUnManagedData();
        
        //if the analyzer outputs a risk, system will create a risk
        if (result.risk == true){
            //Disaster Is Detected
            //Disaster Care Taker Object is created
            const disCareTaker = new DisasterCareTaker();

            //Disaster Object is Created
            const disaster = new Disaster(disCareTaker,result.type,result.lat,result.lon);
            
            //Add to the Disaster List
            disasterList.push(disaster);

            //Adding Service units to the disaster observers list
            disaster.RegisterServiceUnit(policeDep1);
            disaster.RegisterServiceUnit(policeCar1);

            //Notifying Service Units about disaster
            disaster.NotifyServiceUnits("Level "+result.level+ " "+disaster.type+" Disaster has occured in Latitude: "+result.lat+" Longitude:"+result.lon)

            //Notifying Public about disaster
            //disaster.SendPublicNotificationAlerts(); // commented for this scenario

            disaster.ChangeLevel(0)
            //policeCar1.disaster?.NotifyServiceUnits()
            
        }
    });

    console.log("Time Stamp :" + Date() + " Checking for Sensor Output Finished...")
//}, 50000) //loop is commented for the use case

*/
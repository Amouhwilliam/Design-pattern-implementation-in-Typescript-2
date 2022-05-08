import { InputAnalyzer } from "./InputAnalyzer";
import { Sensor } from "../Sensor";
import { RiskAnalyzer } from "./RiskAnalyzer";

export class InputAnalyzeAdapter implements InputAnalyzer{
    
    sensor: Sensor | undefined;
    riskAnalyzer: RiskAnalyzer;
    constructor(){
        this.riskAnalyzer = new RiskAnalyzer();
    }

    ChangeSensor(sensor : Sensor){
        this.sensor = sensor;
        //this.sensor.type
    }

    AnalyzeUnManagedData(){
        const data = this.sensor!.ProvideData();
        console.log("Analyzing data from :"+data.type+" Sensor")
        if (data.type == "EarthQuake"){
            //Convert to Managed Data
            console.log("Converting to EQ Managed Data")
            const  magnitude = (data.level1 * 0.5 + data.level2  * 1.2 + data.level3 * 0.75) / 3

            //Call Analyzer with Managed Data
            return this.riskAnalyzer.AnalyzeManagedData("EarthQuake",magnitude,0,0,0,0,data.lat,data.lon);
        }
        if (data.type == "Smoke"){
            console.log("Converting to SM Managed Data")
            const  airquality = (data.level1 * 0.8 + data.level2  * 1.2 ) / 2
            return this.riskAnalyzer.AnalyzeManagedData("Smoke",0,0,airquality,0,0,data.lat,data.lon);
        }
        if (data.type == "Water"){
            console.log("Converting to WL Managed Data")
            const  waterlevel = (data.level1 * 0.5 + data.level2  * 1.2 + data.level3 * 0.75,data.level3 * 0.95) / 4
            return this.riskAnalyzer.AnalyzeManagedData("Water",0,waterlevel,0,0,0,data.lat,data.lon);
        }
        if (data.type == "Image"){
            console.log("Converting to Image Managed Data")
            const  detection = data.level1
            return this.riskAnalyzer.AnalyzeManagedData("Image",0,0,0,detection,0,data.lat,data.lon);
        }
        if (data.type == "Public"){
            console.log("Converting to Public Managed Data")
            const  pub = data.level1;
            return this.riskAnalyzer.AnalyzeManagedData("Water",0,0,0,0,pub,data.lat,data.lon);
        }
        return {}
    }
}
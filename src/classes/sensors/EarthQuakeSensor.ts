import { Sensor } from "./Sensor";

export default class EarthQuakeSensor implements Sensor {
    location: String[] = [];
    constructor(lat: String, long: String){
        this.location = [lat,long];
        console.log("Established Earth Quake Sensor in Lat: "+lat+" Lon: "+long)
    }

    ProvideData(){
        return {type :"EarthQuake",
                lat :this.location[0],
                lon : this.location[1],
                level1: this.getRandomInt(0,10) ,
                level2: this.getRandomInt(0,10) ,
                level3: this.getRandomInt(0,10) ,
                timestamp: new Date()};
    }

    getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
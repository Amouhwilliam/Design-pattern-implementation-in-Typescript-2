import { Sensor } from "./Sensor";

export default class PublicInput implements Sensor {
    location: String[] = [];
    constructor(lat: String, long: String){
        this.location = [lat,long];
        console.log("Recieved Public Input from Lat:"+lat+" Lon:"+long)

    }

    ProvideData(){
        return {type :"Public",
                lat :this.location[0],
                lon : this.location[1],
                level1: this.getRandomInt(0,100) ,
                timestamp: new Date()};
    }

    getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
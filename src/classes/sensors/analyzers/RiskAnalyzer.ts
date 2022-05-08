export class RiskAnalyzer {
    EQ_Risk_Level= 4.6; //EarthQuake minimum Risk Level
    WL_Risk_Level = 6.5; //Water Level minimum Risk Level
    AQ_Risk_Level = 9;  //Smoke minimum Risk Level
    Image_Risk_Level = 100;  //Detection minimum Risk Level
    Public_Risk_Level = 6;  //Detection minimum Risk Level
    AnalyzeManagedData(type:String,magnitude:Number=0,waterlevel: Number = 0,airquality:Number= 0,detection:Number=0,pub:Number=0,lat:String,lon:String){
        if (type == "EarthQuake"){
            if (this.EQ_Risk_Level <= magnitude){
                console.log("Earth Quake Detected magnitude: "+ magnitude )
                return {type: type,risk:true, level:1,lat:lat,lon:lon}
            }
            
        }

        if (type == "Smoke"){
            if (this.AQ_Risk_Level <= airquality){
                console.log("Heavy Smoke Detected airquality: "+ airquality )
                return {type: type,risk:true, level:1,lat:lat,lon:lon}
            }
            
        }

        if (type == "Water"){
            if (this.WL_Risk_Level <= waterlevel){
                console.log("Flood Threat Detected WaterLevel: "+ waterlevel )
                return {type: type,risk:true, level:1,lat:lat,lon:lon}
            }
            
        }

        if (type == "Image"){
            if (this.Image_Risk_Level <= detection){
                console.log("Fire Detected Accuracy: "+ detection )
                return {type: type,risk:true, level:1,lat:lat,lon:lon}
            }
            
        }
        if (type == "Public"){
            if (this.Public_Risk_Level <= pub){
                console.log("Emergency Detected Verified Source Accuracy Level: "+ pub )
                return {type: type,risk:true, level:1,lat:lat,lon:lon}
            }
            
        }
        return {type: type,risk:false, level:0,lat:lat,lon:lon}
    }
}
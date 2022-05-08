export class Memento {
    private savedJson ;

    constructor(json : any){
        this.savedJson = json;

    }

    getJson(): any{
        return this.savedJson;
    }
}
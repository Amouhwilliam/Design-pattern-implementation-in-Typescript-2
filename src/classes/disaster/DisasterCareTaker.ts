import { Memento } from "./Memento";

export class DisasterCareTaker {

    private mementoList: Array<Memento> = [];
    private current_State = -1;

    AddMemento( memento : Memento){
        console.log("Saving the state of Disaster");

        this.mementoList.push(new Memento(memento.getJson()));
        this.current_State = this.mementoList.length - 1;

        
    }

    checkMemento(){
        
        
        this.mementoList.forEach(memento => {
            console.log(memento.getJson())
        });
    }

    Undo(){

        
        console.log("Undoing the state of Disaster");
        if (this.current_State <= -1){
            //return this.mementoList.pop();
            //this.current_State  = -1;
            console.log("Nothing to undo")
        }
        else{
            this.current_State --;
            return this.mementoList[this.current_State]

        }
    }

    redo(){
        console.log("Redoing the state of Disaster");
        if (this.current_State = this.mementoList.length - 1){
            //return this.mementoList.pop();
            //this.current_State  = -1;
            console.log("Nothing to Redo")
        }
        else{
            this.current_State ++;
            return this.mementoList[this.current_State]

        }
    }

}
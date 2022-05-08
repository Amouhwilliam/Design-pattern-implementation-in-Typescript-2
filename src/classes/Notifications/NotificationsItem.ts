export class NotificationsItem {
    public message: string = '';
    public destination: string = '';

    getMessage(): string {
        return this.message 
    } 
    
    getDestination(): string {
        return this.destination
    }

    alertPopulation(): void {}
}

export class Sms extends NotificationsItem {

    public router_id: number = 0;
    public sender_phone: number = 4141;
    public receivers_phone: number[] = [];

    constructor(
        message: string = 'Bun', 
        destination: string = 'Tokyo',
        router_id: number = 12345, 
        sender_phone: number = 4141,
        receivers_phone: number[] = []
    ) {
        super();
        this.message = message
        this.destination = destination
        this.router_id = router_id
        this.sender_phone = sender_phone
        this.receivers_phone = receivers_phone
    }

    getRouterId(): number {
        return this.router_id 
    } 
    
    getSenderPhone(): number {
        return this.sender_phone
    }

    getReceiversPhone(): number[] {
        return this.receivers_phone
    }

    alertPopulation(): void {
        for(let item of this.receivers_phone){
            console.log('<<--------------------------->>');
            console.log('SMS from: '+this.sender_phone);
            console.log('      !!!!ALERT !!!!');
            console.log('<<--------------------------->>');
            console.log('Message to population of: '+this.destination);
            console.log(this.message);
            console.log('<<--------------------------->>');
            console.log('Send by router: '+this.router_id+' to '+item);
        }
    }

}

export interface RadioData {
    name?: string
    frequency?: number
}

export class Radio extends NotificationsItem {

    public radioData: RadioData[] = [];

    constructor(message: string = 'Bun', destination: string = 'Tokyo', radioData: RadioData[] = []) {
        super();
        this.message = message
        this.destination = destination
        this.radioData = radioData
    }

    getRadioData(): RadioData[] {
        return this.radioData
    }

    alertPopulation(): void {
        for(let item of this.radioData){
            console.log('<<--------------------------->>');
            console.log('Radio: '+item.name+' of frequency: '+item.frequency+' is diffusing');
            console.log('<<--------------------------->>');
            console.log('Message to population of: '+this.destination);
            console.log(this.message);
            console.log('<<--------------------------->>');
        }
    }
}

export class Email extends NotificationsItem {

    public sender_address: string = '';
    public receivers_address: string[] = [];

    constructor(message: string = 'Patty', destination: string = 'New York', sender_address: string = 'johndoe@gmail.com', receivers_address: string[] = []) {
        super();
        this.message = message
        this.destination = destination
        this.sender_address = sender_address
        this.receivers_address = receivers_address
    }

    getSenderAddress(): string {
        return this.sender_address 
    } 

    getReceiversAddress(): string[] {
        return this.receivers_address 
    } 

    alertPopulation(message: string = this.message): void {
        for(let item of this.receivers_address){
            console.log('<<--------------------------->>');
            console.log('Email from: '+this.sender_address+' to '+item);
            console.log('      !!!!ALERT !!!!');
            console.log('<<--------------------------->>');
            console.log('Message to population of: '+this.destination);
            console.log(message);
            console.log('<<--------------------------->>');
        }
    } 
}


import NotificationSet from "./NotificationSet"
import { Sms, Email, Radio, RadioData } from './NotificationsItem'

export default class NotificationDirector { 
    public sender_phone: number = 4141;
    public sender_email_address: string = 'police@test.com';
    public router_id: number = 91245638;

    constructor(sender_phone: number = 4141, sender_email_address: string = 'police@test.com', router_id:number = 91245638) {
        this.sender_phone = sender_phone
        this.sender_email_address = sender_email_address
        this.router_id = router_id
    }

    getSenderPhone(): number {
        return this.sender_phone 
    } 

    getSenderEmailAddress(): string {
        return this.sender_email_address 
    } 

    getRouterId(): number {
        return this.router_id 
    } 
    
    createFirstLevelNotification(location: string, receivers_address: string[], message: string): void {
        const email = new Email(message, location, this.sender_email_address, receivers_address)

        const notificationSet = new NotificationSet([email])

        notificationSet.sendNotification()
    }

    createSecondLevelNotification(location: string, receivers_address: string[], receivers_phone: number[], message: string): void {
        const email = new Email(message, location, this.sender_email_address, receivers_address)
        const sms = new Sms(message, location, this.router_id, this.sender_phone, receivers_phone)

        const notificationSet = new NotificationSet([email, sms])

        notificationSet.sendNotification()
    }

    createThirdLevelNotification(location: string, receivers_address: string[], receivers_phone: number[], radioData: RadioData[], message: string): void {
        const email = new Email(message, location, this.sender_email_address, receivers_address)
        const sms = new Sms(message, location, this.router_id, this.sender_phone, receivers_phone)
        const radio = new Radio(message, location, radioData)

        const notificationSet = new NotificationSet([email, sms, radio])

        notificationSet.sendNotification()
    }
}

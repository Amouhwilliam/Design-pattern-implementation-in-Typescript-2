import {NotificationsItem} from "./NotificationsItem"

export default class NotificationSet { // WORK IN PROGRESS
    public items: NotificationsItem[] = []

    constructor(items: NotificationsItem[] = []) {
        this.items = items
    }

    getItems(): NotificationsItem[] {
        return this.items 
    }

    sendNotification(): void {
        for(let element of this.items){
            element.alertPopulation()
        }
    }

}

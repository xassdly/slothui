
export class EventModel {
    title: string;
    date: Date;
    icon: string;

    constructor(title: string, date: Date, icon: string) {
        this.title = title;
        this.date = date;
        this.icon = icon;
    }
}
export class Event {
    id?:  string;
    name: string;
    date: Date;

    constructor() {
        this.date = new Date();
    }
}

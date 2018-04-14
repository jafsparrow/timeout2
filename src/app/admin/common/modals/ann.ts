export class Annoucement {
    id?: String;
    title: String;
    description: String;
    date: Date;
    lastApplicationDate: Date;

    constructor({
        id = null,
        title = null,
        date = null,
        description = null,
        lastApplicationDate = null
    }) {
        this.id = id;
        this.title =  title;
        this.description = description;
        this.date = date;
        this.lastApplicationDate = lastApplicationDate;
    }

}

export class Annoucement {
    id?: String;
    name: String;
    date: Date;
    lastApplicationDate: Date;
    prizeDetails: Prize

    constructor({
        id = null,
        name = null,
        date = null,
        lastApplicationDate = null,
        prizeDetails = null,
    }) {
        this.id = id;
        this.name = 
        this.date = date;
        this.lastApplicationDate = lastApplicationDate;
        this.prizeDetails = prizeDetails;

    }

}

interface Prize {
    firstPrize: String;
    secondPrize: String;
    thrirdPrize: String;
}
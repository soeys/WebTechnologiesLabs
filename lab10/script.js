class Phone {
    constructor(phoneNumber, date, blocker) {
        this.phoneNumber = phoneNumber;
        this.date = date;
        this.blocker = blocker;
    }
}

class TE {
    constructor(number, zip, size) {
        this.number = number;
        this.zip = zip;
        this.size = size;
    }
}

class Network {
    constructor(Phone, TE) {
        this.Phone = Phone;
        this.TE = TE;
    }
}
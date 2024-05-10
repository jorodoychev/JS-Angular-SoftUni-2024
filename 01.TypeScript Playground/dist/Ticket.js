"use strict";
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function manageTickets(ticketDescriptions, sortCriteria) {
    let tickets = [];
    ticketDescriptions.forEach(description => {
        let [destination, price, status] = description.split("|");
        tickets.push(new Ticket(destination, parseFloat(price), status));
    });
    if (sortCriteria === "destination") {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (sortCriteria === "price") {
        tickets.sort((a, b) => a.price - b.price);
    }
    else if (sortCriteria === "status") {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    return tickets;
}
console.log(manageTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
//# sourceMappingURL=Ticket.js.map
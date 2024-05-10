class Ticket {
    destination: string
    price: number
    status: string

    constructor(destination: string, price: number, status: string) {
        this.destination = destination
        this.price = price
        this.status = status
    }
}

function manageTickets(ticketDescriptions: Array<string>, sortCriteria: string): Array<Ticket> {
    let tickets: Array<Ticket> = []

    ticketDescriptions.forEach(description => {
        let [destination, price, status] = description.split("|")
        tickets.push(new Ticket(destination, parseFloat(price), status))
    })

    if (sortCriteria === "destination") {
        tickets.sort((a: Ticket, b: Ticket) => a.destination.localeCompare(b.destination))
    } else if (sortCriteria === "price") {
        tickets.sort((a: Ticket, b: Ticket) => a.price - b.price)
    } else if (sortCriteria === "status") {
        tickets.sort((a: Ticket, b: Ticket) => a.status.localeCompare(b.status))
    }

    return tickets
}

console.log(manageTickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
))


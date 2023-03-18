/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. If ticket numbers is more then 100, but less than 200. first 100 tickets will be per ticket price 100/ticket.
rest tickets will be 90 take per price 
    first 100 n ---> 100tk
    rest ---> 90tk
3. if you purchase more than 200 tickets 
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ---> 70
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Rate = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Rate + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Rate = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Rate + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(100);
console.log(price);
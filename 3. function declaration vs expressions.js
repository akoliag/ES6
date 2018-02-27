//Summary:

//Function Declaration:
function getCost(supply) {
    return supply.price * supply.quantity;
}

//by dropping the name we move to an Anonymous Function Expression:

function (supply) {
    return supply.price * supply.quantity;
}
// we can assign it to the variable or pass it to another function but we can‘t have it to stand alone

//From Anonymous Function Expression to an Arrow Function with Block Body:

(supply) =>  {
    return supply.price * supply.quantity;
}

//all arrow functions are anonymous and all are expressions
//by removing the curly braces we get the arrow function with an expression body:
supply =>  supply.price * supply.quantity;
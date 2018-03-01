var message = "Hello";

function sayHello(language) {
    if (language === "german") {
        var message = "Hallo";
        return message;
    } else if (language === "spanish") {
        var message = "Hola";
        return message;
        }
    return message;
}

console.log(sayHello("spanish"));
console.log(sayHello("german"));
console.log(sayHello());//won't work unlessfunction has var instead of let

//the above but with let:

var message = "Hello";

function sayHello(language) {
    if (language === "german") {
        let message = "Hallo"; //available only in if block
        return message;
    } else if (language === "spanish") {
        let message = "Hola";//available only in else if block
        return message;
        }
    return message; //available globally
}

let message = "Hi there";
console.log(window.message);//using let in the global scope, we no longer add a property to the global object
//it means that to have it as a window property we need to intentionally assign it (unlike var):
//window.message = message;

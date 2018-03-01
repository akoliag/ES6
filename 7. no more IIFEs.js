var maths = (function(){
    var pi = 3.14159;
    return {
        PI: pi
    };
}());

console.log(typeof pi);//running this code, we get undefined for typeof pi
console.log(maths.PI);
//in the example above we use IIFE to avoid polluting the global scope with some of our private variables
//IIFE simply blocks them from being accessible outside

//now to do this we don't need IIFE anymore, we can use let and a simple block:

var maths; //declare the maths variable and have it accessible globally
    {
    let pi = 3.14159; //due to let pi is not accessible outside the block
    return {
        PI: pi
    };
}
//with let with a variable declaration we can just use a simple block if we need to hide away some scope
//even a simple stand alone block like this
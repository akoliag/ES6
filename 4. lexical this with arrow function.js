function setupApp() {
    this.version = "5.1.2";
    this.createdBy = "Wes";

    var handler = function() {
        console.log('hi, welcome to version : '
        + this.version
        + ' hand crafted by '
        + this.createdBy);
    };
    handler = handler.bind(this);
    document.addEventListener("click", handler);

}

setupApp();

//the above but as an arrow function:

function setupApp() {
    this.version = "5.1.2";
    this.createdBy = "Wes";

     handler = () => {
        console.log('hi, welcome to version : '
        + this.version
        + ' hand crafted by '
        + this.createdBy);
    };
    //handler = handler.bind(this);
    document.addEventListener("click", handler);

}
//we don't need to bind handler with "this" when using an arrow function as it blocks up the tunnel just like bind except also then refers to
//to the lexical scope to grab the value of "this". What's more we can no longer use bind to change the value of this with an arrow function.
//Even if we do it, it won't work.


setupApp();


//TASK 1
function setupApp() {
    this.version = "5.1.2";
    this.createdBy = "Wes";

//1. make this more concise and inline.
    document.addEventListener("click", () =>
        console.log('hi, welcome to version : '+ this.version + ' hand crafted by ' + this.createdBy));
       

//2. write out function expression version inlined too:
    document.addEventListener("click", (function() {
        console.log('hi, welcome to version : '+ this.version + ' hand crafted by ' + this.createdBy);

    })bind(this));
}
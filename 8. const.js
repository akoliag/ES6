//Block scoping - Const

function asUsed() {
    let numbers = [1.00, 2.07, 3.05];

    let sum = 0;
    for (var index = 0; index < numbers.length; index++) {
        sum +=numbers[index];
    }
    let average = sum / index;
    console.log("The average proce is: " + average.toFixed(2));
}

asUsed();

//with const we can only initialize the variable once so it's an immutable variable/refrence
//must be declared and initialized at the same time and can't be changed after

//the above but with const:

function asUsed1() {
    const numbers = [1.00, 2.07, 3.05];

    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum +=numbers[index];
    }
    const average = sum / numbers.length;
    console.log("The average proce is: " + average.toFixed(2));
}

asUsed1();
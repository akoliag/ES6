//Destructuring - easily extract array elements or object properties and store
//them in variables

//array Destructuring:
[a,b] = ["Hello", "Max"];
console.log(a);
console.log(b);

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

//object Destructuring:
// {name} = {name: 'Max', age: 28};
// console.log(name);
// console.log(age);//undefined as we don't pull this out only name

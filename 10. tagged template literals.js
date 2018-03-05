const people = [
    {
        first: "Bob",
        last: "DOE"
    },
    {
        first: "Pax",
        last: "HigBEe"
    },
    {
        first: "Anne",
        last: "Jostol"
    }
];

const names = people.map(p => upper` Hi ${p.last}, ${p.first}`);
//if we put an expression (that evaluates to a function) in front of a template literal then this becomes referred to as a tag function 
function upper (strings, ...cooked) {
    //rest parameter allows us to represent an indefinite number of arguments as an array
    let result = [];
    for(let i = 0; i < strings.length; i++) {
        result.push(strings[i]);
        result.push((cooked[i] || "").toUpperCase());
    }
    return result.join("");
}
console.log(names);
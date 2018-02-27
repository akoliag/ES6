function mapper(number) {
    return {
        number: number,
        squared: number * number,
        isEven: number % 2 == 0
    }
}
    
console.log([1,2,3].map(mapper));
    
     
    
//the above function but as an arrow one:
    
var mapperA = number  => ({
    number: number,
    squared: number * number,
    isEven: number % 2 == 0
})
//curly braces with an arrow function indicate that we use a block body or a statement body 
//but the above is working with an expression body so if we want this to work we need to wrap it in parenthesis
    
console.log([1,2,3].map(mapperA));
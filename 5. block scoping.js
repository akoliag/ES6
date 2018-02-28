//a block in JS is a set of statements that are grouped together with curly braces

for(var number =1; number < 5; number++) {
    var button = document.createElement("button");
    var size = (number * 100) + "%";
    var buttonText = "#" + number + " - " + size
    button.innerText = buttonText;
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        console.log("You picked " + buttonText);
        document.body.style.fontSize = size;
    })
}

//the above code will return all the time 400% font size as by the time it reaches EventListener 
//the value of it is 400%

//when we change var to let, the code returns correct options as variables
//in this case are local to the each iteration of the for loop

for(var number =1; number < 5; number++) {
    var button = document.createElement("button");
    let size = (number * 100) + "%";
    let buttonText = "#" + number + " - " + size
    button.innerText = buttonText;
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        console.log("You picked " + buttonText);
        document.body.style.fontSize = size;
    })
}



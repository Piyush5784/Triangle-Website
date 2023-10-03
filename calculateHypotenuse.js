const button = document.querySelector("#button");

const input = document.querySelectorAll(".input");

const output = document.querySelector("#printOutput");

button.addEventListener("click",calculateScore);

function calculateSquare(a,b){
    return (a*a)+(b*b);
}
function calculateScore(){
    if(Number(input[0].value == 0) || Number(input[1].value == 0)){
        output.innerText = " Enter Value Greater than 0 is calculate value";
    }
    else{
    var hypotenuse = calculateSquare(Number(input[0].value),Number(input[1].value));
    output.innerText = "Hypotenuse is " + Math.sqrt(hypotenuse);
}
}

const input = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
btn.addEventListener('click',calculateArea);

console.log( Number( input[0].value))
function calculateArea(){
    if(Number(input[0].value) == 0 || Number(input[1].value) == 0){
        output.innerText = " Enter Value greater than zero(0) is calculate area";
    }
    else{
    var area = 1/2*(Number( input[0].value) * Number( input[1].value));
    output.innerText = "The area of Triangle is "+area + " cm square ";
    
}}
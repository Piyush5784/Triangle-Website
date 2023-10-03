const input = document.querySelectorAll(".input");

const output = document.querySelector("#output");

const btn = document.querySelector("#btn");

btn.addEventListener("click",isTriangle);

function isTriangle(){
    var totalSumOfAngles = sumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(Number(input[0].value) == 0 || Number(input[0].value) == 0 || Number(input[0].value) == 0){
        output.innerText = " Enter values greater than zero(0) to know these angle can form a triangle or not";
    }
    else{
    if(totalSumOfAngles >= 180){
        output.innerText = "The Angles forms a triangle 😊";
    }
    else{
        output.innerText = "The Angles don't forms the triangle 😧";
    }
}
}
function sumOfAngles(angle1,angle2,angle3){
    return angle1+angle2+angle3;
}  

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("input-el")
const btn = document.getElementById("cvrt-btn")

/*<p class="res">eddjzefezfhiehql</p>*/

btn.addEventListener("click", function(){
    convUnit("dist",inputEl.value, 3.281, "meters", "feet")
    convUnit("vol",inputEl.value, 2.204, "liters", "gallons")
    convUnit("mass",inputEl.value, 0.264, "kilos", "pounds")
})

function convUnit(id, value, ratio, unitMet, unitImp){ /* could make a dictionnary/JSON but I am too lazy*/
    document.getElementById(id).innerHTML = `${value} ${unitMet} = ${(value*ratio).toFixed(3)} ${unitImp} | ${value} ${unitImp} = ${(value/ratio).toFixed(3)} ${unitMet}`
}
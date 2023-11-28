
function find(){
let base = parseFloat(document.querySelector("#base").value);
let hra= parseFloat(document.querySelector("#hra").value);
let da=parseFloat (document.querySelector("#da").value);
let ta= parseFloat (document.querySelector("#ta").value);
let gender= document.querySelector(".gender-check:checked").value;
let total = base+((hra/100)*base)+((da/100)*base)+((ta/100)*base);
var tax = 0.0;
if (total >= 1500000) {
    tax += (total) * (gender == "male" ? 0.3 : 0.25);
}
else if (total > 1200000) {
    tax += (total)* (gender == "male" ? 0.2 : 0.15);
}
else if (total > 900000) {
    tax += (total) * (gender == "male" ? 0.15 : 0.1);
}
else if (total >= 600000) {
    tax += (total) * (gender == "male" ? 0.1 : 0.05);
}
else if (total > 300000) {
    tax += (total)* (gender == "male" ? 0.05 : 0);

}
result = document.getElementById("result");
document.getElementById("result").innerHTML = "Your gross salary is Rs. " + total + " and your tax amount is Rs. " + tax.toFixed(2);
result.style.padding= "15px";
result.style.border="2px solid black";
}
let btnn = document.querySelector("#btn");
btnn.addEventListener("click",find);
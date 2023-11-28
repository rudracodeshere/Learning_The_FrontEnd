function printit(value){
    prev = document.getElementById("output").innerHTML;
    if(prev=="-------------------------------------"){
        prev="";
    }
    document.getElementById("output").innerHTML=prev+value;
}
function clearit(){
    document.getElementById("output").innerHTML="-------------------------------------";
}
function equalsTo(){
    prev = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML=eval(prev);
}
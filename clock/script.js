
timeFinder = ()=>{
    let a = new Date();
    let time = a.getHours() +" : "+ a.getMinutes() +" : "+ a.getSeconds();
    document.getElementById("curr-time").innerHTML = time;
}
setInterval(timeFinder, 1000);
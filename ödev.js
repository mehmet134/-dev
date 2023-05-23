let takeName = prompt("Adınızı giriniz")

let myName = document.querySelector('#myName')

myName.innerHTML = `${takeName}`

 function showTime(){
    var myClock = new Date().toLocaleString('tr-TR')
    document.getElementById("myClock").innerHTML = myClock 


 }
setInterval(showTime,1000);



function horas () {
var msg = document.getElementById("d1")
var img = document.getElementById("img1")
var backg = document.getElementById('color')
var data = new Date()
var horas = data.getHours()
var data2 = new Date()
var min = data2.getMinutes()


if(horas >= 6 && horas <= 12){
    img.scr = 'manha.jpg'
    msg.innerText = (`Agora são ${horas}:${min} da manhã!`)

}
else if(horas >=13 && horas <= 18 ){
    img.src = "tarde.jpg"
    backg.style.background = 'orange' 
    msg.innerText += (`Agora são ${horas}:${min} da tarde!`)

}

else {
    img.src = 'noite.jpg'
    backg.style.background = 'gray'
    msg.innerText += (`Agora são ${horas}:${min} da noite!`)

}


}


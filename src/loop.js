let idArr = ["b1", "b2", "b3", "b6", "b9", "b8", "b7", "b4"]
let i = 0;

let key = document.getElementById('bas');
let styleSari = document.getElementById('sari').style.backgroundColor;
let styleKirmizi = document.getElementById('kirmizi').style.backgroundColor;
let keyStop = document.getElementById('dur');
document.getElementById("dur").disabled = true;

key.addEventListener('click', function () {

    fonksiyonum()
})
var calistir
function fonksiyonum() {
    calistir = setInterval(function () {
        renkDegis()
        document.getElementById("bas").disabled = true;
        document.getElementById("dur").disabled = false;
    }, 500)
}
keyStop.addEventListener('click', function () {
    stopFunction()
})

function stopFunction() {
    clearInterval(calistir)
    document.getElementById("bas").disabled = false;
    document.getElementById("dur").disabled = true;
}
function renkDegis() {
    document.getElementById(idArr[i % 8]).style.backgroundColor = styleSari;
    document.getElementById(idArr[(i + 1) % 8]).style.backgroundColor = styleKirmizi;
    i++
}

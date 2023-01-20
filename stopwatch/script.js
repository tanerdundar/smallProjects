const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let click;
let time=0;
buttons();

btnStart.addEventListener('click',()=>{
    buttons()
    basla(time)
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
})
function basla(int) {
    counter = setInterval(()=>{
        if(click) {    
        document.getElementById('ekran').innerHTML=(int/100).toFixed(2)  
        int++;
        time++;
    } },10)
}
btnStop.addEventListener('click',()=>{
    buttons();
    document.getElementById("reset").disabled = false;
    click = false;
    clearInterval(counter)
})
btnReset.addEventListener('click',() =>{
    buttons(); 
    time=0; 
    clearInterval(counter)
    document.getElementById('ekran').innerHTML=(time/100).toFixed(2)
})
function buttons() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
    click=true;
}
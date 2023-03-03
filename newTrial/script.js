let container = document.getElementById("container")
let outContainer = document.getElementById("out-container")

let buttonId=1
let allFields = [];
let blackDivsId= [8688,8786,8788,8887,8888];
creatingField();

creatingButton(2)
document.getElementById("button1").innerText='Start'
document.getElementById("button2").innerText='Stop'
document.getElementById("button2").disabled = true;

paintingBlack(blackDivsId)

for(let i=1;i<=2500;i++) {
    let div = document.getElementById("field"+i) 
    div.addEventListener('click',()=>{
    })
}

function creatingButton(repeat) {
    for (let i=0;i<repeat;i++) {
    let newButton = document.createElement("button");
        newButton.style.width="250px"
        newButton.style.height="50px"
        newButton.id="button"+(buttonId);
        buttonId++;
        outContainer.appendChild(newButton)
        newButton.style.fontSize="35px"
    }
}
function paintingBlack(arr) {
    for(let i=0;i<arr.length;i++) {
    let div = document.getElementById("field"+(arr[i]+1))
        div.style.backgroundColor="black"
        div.isLive= true
    }
}

 ///mineFieldObjects.filter((item) => item.id == param.id + 1)[0])

 function creatingField() {
    for (let i = 1; i <= 100; i++) {
    let columnsDiv = document.createElement("div");
    container.appendChild(columnsDiv)
    for (let j = 1; j <= 100; j++) {
        let field = document.createElement("div")
        columnsDiv.appendChild(field)
        field.style.width = "5px"
        field.style.height = "5px"
        field.style.backgroundColor = "antiquewhite"
        field.id = "field" + (100 * (i - 1) + j)
        field.x = i;
        field.y = j;
        allFields.push(field)
        field.isLive= false;
    }
}
}

function fonksiyonum() {
    calistir = setInterval(function () {
        renkDegis()
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = false;
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
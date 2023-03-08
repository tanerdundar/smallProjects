const container = document.getElementById("trial");

let id = 1;
let blueIndex = 1;

for (let i = 1; i <= 40; i++) {
  let columnsDiv = document.createElement("div");
  container.appendChild(columnsDiv);
  for (let j = 1; j <= 40; j++) {
    let field = document.createElement("div");
    columnsDiv.appendChild(field);
    field.style.width = "12px";
    field.style.height = "12px";
    field.style.backgroundColor = "red";
    //  field.style.borderRadius = "25px";
    // field.style.borderStyle = "solid";
    // field.style.position = "relative";
    field.id = "field" + id;
    field.x = i;
    field.y = j;
    id++;
  }
}
let myDiv = document.getElementById("field" + blueIndex);
myDiv.style.backgroundColor = "blue";

window.addEventListener("keydown", tryFunct);

function tryFunct(key) {
  if (key.keyCode == "37" && myDiv.x != 1) {
    blueMaker(-40);
  }
  if (key.keyCode == "38" && myDiv.y != 1) {
    blueMaker(-1);
  }
  if (key.keyCode == "39" && myDiv.x != 40) {
    blueMaker(40);
  }
  if (key.keyCode == "40" && myDiv.y != 40) {
    blueMaker(1);
  }
}
function blueMaker(a) {
  myDiv.style.backgroundColor = "red";
  blueIndex += a;
  myDiv = document.getElementById("field" + blueIndex);
  myDiv.style.backgroundColor = "blue";
}

const buttonSend = document.getElementById('confirmer')
const buttonChecked = document.getElementById('checked')
const buttonAll = document.getElementById('all')
let screen = document.getElementById('inputerId')
let i=0;
let f=0;
let arr= [];

buttonSend.addEventListener('click',()=>{
    screen.value = screen.value.trim()
    if(screen.value!=""&&screen.value.length<=25) {
        adder(screen.value)
        screen.value=""
        screen.focus()
    } else if(screen.value!=""&&screen.value.length>25) {
        screen.value="" 
        alert("Maximum number of letters: 25");
    } else{}
})
buttonAll.addEventListener('click',()=> {
    for(let k=0;k<i;k++){
        let element = document.getElementById(k)
        if(element){
            element.remove() }  }
        i=0;
        f=0;
})
buttonChecked.addEventListener('click',()=> {
    arr = document.querySelectorAll('input[type="checkbox"]:checked')
    for (let i = 0;i<arr.length;i++){
        document.getElementById(arr[i].id).remove()
    }  }  )

function adder(str) {
    var checkbox =creatingCheckbox();
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.id=f;
    f++;
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(str));
    ul.appendChild(li);
  }
  function creatingCheckbox() {
    var myDiv = document.getElementById("myDiv");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id=i;
    myDiv.appendChild(checkbox);
    i++;
    return checkbox
}
const finder = document.getElementById('but1')
const reporter = document.getElementById('but2')
let input = document.getElementById('inp');
let aelInput ;
let funcArr= [];

reporter.addEventListener('click',()=> {
 let sentence =""
 let aelArr = aelInput.split(" ")
 for(let i=0;i<aelArr.length;i++){
    if(funcArr.indexOf(aelArr[i])==-1){
        sentence += aelArr[i]+ " ";
    } 
 }
 document.getElementById("div3").innerText=sentence
})

finder.addEventListener('click',()=>{ 
    aelInput = input.value
    let newArr = input.value.split(" ")
    let arr2 = wordsChecker(newArr)
    input.value=""
    document.getElementById("div2").innerText=arr2
    
})

function wordsChecker(arr) {
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i]==arr[j]){
                if(funcArr.indexOf(arr[i])==-1) {
                    funcArr.push(arr[i]) 
                    }    
               } 
            }
        }
    return funcArr;
}
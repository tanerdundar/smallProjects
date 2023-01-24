const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')

let photoDivOne = document.getElementById('firstBox')
let photoDivTwo = document.getElementById('secondBox')
let photoDivThree = document.getElementById('thirdBox')
let photoDivFour = document.getElementById('fourthBox')

let photoOne =document.getElementById('photo1')
let photoTwo =document.getElementById('photo2')
let photoThree =document.getElementById('photo3')
let photoFour =document.getElementById('photo4')

let arr  =["Leclerc.jpg","Sainz.jpg","Perez.jpg","Verstappen.jpg"]
let arr2 =["Hamilton.jpg","Russell.jpg","Ocon.jpg","Gasly.jpg"]
let arr3 =["Norris.jpg","Piastri.jpg","Bottas.jpg","Zhou.jpg"]
let arr4 =["Stroll.jpg","Alonso.jpg","Magnussen.jpg","Hulkenberg.jpg"]
let arr5 =["De Vries.jpg","Tsunoda.jpg","Albon.jpg","Sargeant.jpg"]

changePhoto(arr);
button1.style.backgroundColor=("rgb(52, 43, 43)")

button1.addEventListener("click",()=> {
    changePhoto(arr) 
    changePhotoSize() 
    buttons()
    button1.style.backgroundColor=("rgb(52, 43, 43)")
})

button2.addEventListener("click",()=> {
    changePhoto(arr2)
    changePhotoSize() 
    buttons()
    button2.style.backgroundColor=("rgb(52, 43, 43)") 
})

button3.addEventListener("click",()=> {
    changePhoto(arr3)
    changePhotoSize()
    buttons()
    button3.style.backgroundColor=("rgb(52, 43, 43)")  
})

button4.addEventListener("click",()=> {
    changePhoto(arr4)
    changePhotoSize() 
    buttons()
    button4.style.backgroundColor=("rgb(52, 43, 43)") 
})

button5.addEventListener("click",()=> {
    changePhoto(arr5)
    changePhotoSize() 
    buttons()
    button5.style.backgroundColor=("rgb(52, 43, 43)")
    
})

photoDivOne.addEventListener('mouseover',()=>{
    changePhotoSize()
    photoDivOne.style.width=("400px")
    photoOne.style.width=('400px')
})
photoDivTwo.addEventListener('mouseover',()=>{
    changePhotoSize()
    photoDivTwo.style.width=("400px")
    photoTwo.style.width=('400px')
})
photoDivThree.addEventListener('mouseover',()=>{
    changePhotoSize()
    photoDivThree.style.width=("400px")
    photoThree.style.width=('400px')
})
photoDivFour.addEventListener('mouseover',()=>{
    changePhotoSize()
    photoDivFour.style.width=("400px")
    photoFour.style.width=('400px')
})

function changePhotoSize() {
    photoDivOne.style.width=("50px")
    photoOne.style.width=('50px')
    photoDivTwo.style.width=("50px")
    photoTwo.style.width=('50px')
    photoDivThree.style.width=("50px")
    photoThree.style.width=('50px')
    photoDivFour.style.width=("50px")
    photoFour.style.width=('50px')
}

function changePhoto(arr) {
    photoOne.src=arr[0]
    photoTwo.src=arr[1]
    photoThree.src=arr[2]
    photoFour.src=arr[3]
}

function buttons(){
    button1.style.backgroundColor=("rgb(177,167,167)")
    button2.style.backgroundColor=("rgb(177,167,167)")
    button3.style.backgroundColor=("rgb(177,167,167)")
    button4.style.backgroundColor=("rgb(177,167,167)")
    button5.style.backgroundColor=("rgb(177,167,167)")
}
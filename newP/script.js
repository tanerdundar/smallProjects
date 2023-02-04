let people= [
    {
        name:"Mustafa Özbulut",
        profession:"Web Developer",
        description:"Kutu kola kadar.(Maaşallah)",
        photo: "p/m.JPG"
    },
    {
        name:"Sefa Çekerek",
        profession:"None",
        description:"Sürünüyor.",
        photo: "p/s.jpg"
    },
    {
        name:"Erdoğan Evci",
        profession:"Jigolo / Pornstar",
        description:"33 santim diyolar ama ben hiç görmedim",
        photo: "p/y.jpg"
    },
    {
        name:"Ömer Faruk Aksak",
        profession:"Memur",
        description:"Takılıyor öyle...",
        photo: "p/z.JPG"
    },
    {
        name:"Ersin Evci",
        profession:"#OpenToWork",
        description:"Kim Busik (Kore'li bir devlet adamı ve yazardır.)",
        photo: "p/e.jpg"
    }
]

let right =document.getElementById('inner-inside-3')
let left =document.getElementById('inner-inside-1')
const supriseButton = document.getElementById('surprise')
let i= 2500;
getBio(i)
left.addEventListener('click',()=> {
    i--;
    getBio(i)
})
right.addEventListener('click',()=> {
    i++;
    getBio(i)
})

supriseButton.addEventListener('click',()=> { 
    getBio(Math.floor(Math.random()*15))
})

function getBio(i) {
    let k= i%5;
        document.getElementById('img').style.backgroundImage = `url(${people[k].photo})`
        document.getElementById('nam').innerHTML = people[k].name
        document.getElementById('pro').innerHTML = people[k].profession
        document.getElementById('bio').innerHTML = people[k].description
}

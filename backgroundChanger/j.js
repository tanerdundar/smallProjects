const key = document.getElementById('try');
key.addEventListener('click', () => {
   let color = "#";
   for (let i = 0; i < 6; i++) {
      color += pickOne()
   }
   document.getElementById('text').style.backgroundColor = color;
   document.getElementById('text2').innerHTML = color;
})
function pickOne() {
   let f = Math.floor(Math.random() * 16)
   const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
   return arr[f];
}
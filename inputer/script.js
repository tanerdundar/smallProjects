const reportButton = document.getElementById('buttonReport')
let inputOneValue = document.getElementById("input1")
let inputTwoValue = document.getElementById("input2")
let commonWords = [];
inputOneValue.value = "merhaba nasılsın ne var ne yok kork"
inputTwoValue.value = "merhaba iyiyim sen nasılsın ne çok tok"

reportButton.addEventListener('click', () => {
    let newArr1 = inputOneValue.value.split(" ")
    let newArr2 = inputTwoValue.value.split(" ")
    valueComparing(newArr1, newArr2)
    reportButton.style.opacity = "0.0"
    reportButton.disabled = true

})

function valueComparing(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                commonWords.push(arr1[i])
                arr1.splice(i, 1)
                arr2.splice(j, 1)
                j--;
                i--;

            }
        }
    }
    console.log(commonWords)
    console.log(arr1)
    console.log(arr2)
}

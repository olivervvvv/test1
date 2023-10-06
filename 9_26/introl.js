let answer;

const textInput = document.getElementById('textInput');
const displayTextMin = document.getElementById('displayTextMin');
const displayTextMax = document.getElementById('displayTextMax');
const gongon = document.getElementById('gongon');
const button = document.getElementById('button');
const rebutton = document.getElementById('rebutton');

let min = 0;
let max = 101;
let randomNumber;

function generateRandomNumber(){
    const max = 100;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateRandomNumber() {
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
}

randomNumber = generateRandomNumber();

// 設置按鈕點擊事件監聽器

button.addEventListener('click', function () {
    const inputValue = parseFloat(textInput.value);

    if (inputValue < randomNumber && inputValue > 0) {
        if (inputValue > min) {
            min = inputValue;
            displayTextMin.textContent = min;
            alert('太小了')
        }
    }
    if (inputValue < randomNumber && inputValue < min) {
        alert('太小了')
}

    if (inputValue > randomNumber && inputValue < 100) {
        if (inputValue < max) {
            max = inputValue;
            displayTextMax.textContent = max;
            alert('太大了')
        }
    }
    if(inputValue == randomNumber){
        displayTextMin.textContent='恭喜答對';
        gongon.textContent='';
        displayTextMax.textContent='';
    }
    if (inputValue > randomNumber && inputValue > max) {
            alert('太大了')
    }
});
rebutton.addEventListener('click', function () {
    // 更新隨機數字
    updateRandomNumber();
    max = 100;
    min = 1;
    // 重置顯示的最小值和最大值
    displayTextMin.textContent = min;
    gongon.textContent='-'
    displayTextMax.textContent = max;
});






console.log(randomNumber);
//////////////////////////

// Call the function to generate a random number initially.

// textInput.addEventListener('input', function () {
//     const inputValue = textInput.valueAsNumber;

//     if (inputValue < randomNumber && inputValue > 0) {
//         if (inputValue > min) {
//             min = inputValue;
//             displayTextMin.textContent = min;
//         } else {
//             displayTextMin.textContent = min;
//         }
//     }

//     if (inputValue > randomNumber && inputValue < 100) {
//         displayTextMax.textContent = inputValue;
//     }
// });

// console.log(randomNumber);



// for(var i =0; i < 5 ; i++){
//     console.log(i)
// }
// console.log(i)


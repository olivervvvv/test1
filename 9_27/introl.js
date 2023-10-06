const textInput = document.getElementById('textInput');
const displayview = document.getElementById('displayview');
const total = document.getElementById('total');
const button = document.getElementById('button');

function isPrime(number){
    if (number <= 1) return false;
    if (number <= 3) return true;

    for(let i=2;i<number;i++){
        if(number%i === 0 )return false;
    }
    return true;
}


button.addEventListener('click', function(){
    let num = parseFloat(textInput.value);
    console.log(num);
    let primes=[];
    let count=0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
            count++;
        }
    }
    total.textContent=count;
    displayview.textContent = primes.join(', '); // 顯示質數，使用逗號分隔

});
const textInput = document.getElementById('textInput');
const displayview = document.getElementById('displayview');
const total = document.getElementById('total');
const button = document.getElementById('button');

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

button.addEventListener('click', function () {
    let num = parseFloat(textInput.value);
    console.log(num);
    let primes = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    displayview.textContent = primes.join(', '); // 顯示質數，使用逗號分隔
});

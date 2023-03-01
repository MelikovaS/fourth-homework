//Verilmish ededler siyahisindaki en boyuk eded ve en kichik ededin ededi ortasini tapan alqoritm

let numbers = [23, 56, 9, 20, 6, 33];
let max = numbers[0];
let min = numbers[0];
let sum = 0;
let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]> max) {
            max = numbers[i];
        }
        if (numbers[i]<min) {
            min = numbers[i];
        }
        
    }
    sum = min + max;
    result = sum / 2;
    console.log(result);
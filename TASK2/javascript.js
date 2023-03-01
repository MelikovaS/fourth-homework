//Verilmish ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm

let numbers = [1, 45, 345, 789, 555, 23, 1001];
let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>99) {
            sum += numbers[i];
        }
        
    }
    console.log(sum);
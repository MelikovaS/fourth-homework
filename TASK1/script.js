// Verilmish ededler siyahisindaki 3-e bolunen ededlerin ededi ortasini tapan alqoritm

let numbers = [5, 8, 12, 67, 9, 3, 24];
let sum = 0;
let result = 0;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%3==0) {
        count++;
        sum += numbers[i];
        
    }
    
}
result = sum/count;
console.log(result);
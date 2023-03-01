// See https://aka.ms/new-console-template for more information


// Verilmish ededler siyahisindaki 3-e bolunen ededlerin ededi ortasini tapan alqoritm

using System;

int[] numbers = { 5, 12, 67, 9, 3, 24 };
int sum = 0;
int result = 0;
int count = 0;
for (int i = 0; i < numbers.Length; i++)
{
    if (numbers[i] % 3 == 0)
    {
        count++;
        sum += numbers[i];

    }

}
result = sum / count;
Console.WriteLine(result);

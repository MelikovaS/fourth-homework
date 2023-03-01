// See https://aka.ms/new-console-template for more information


//Verilmish ededler siyahisindaki en boyuk eded ve en kichik ededin ededi ortasini tapan alqoritm

using System;

int[] numbers = { 23, 56, 9, 20, 6, 33 };
int max = numbers[0];
int min = numbers[0];
int sum = 0;
int result = 0;

for (int i = 0; i < numbers.Length; i++)
{
	if (numbers[i]> max)
	{
		max = numbers[i];
	}
	if (numbers[i]<min)
	{
		min = numbers[i];
	}

}
sum = min + max;
result = sum / 2;
Console.WriteLine(result);

// See https://aka.ms/new-console-template for more information


//Verilmish ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm

int[] numbers = { 1, 45, 345, 789, 555, 23, 1001 };
int sum = 0;
for (int i = 0; i < numbers.Length; i++)
{
	if (numbers[i] > 99)
	{
		sum += numbers[i];
	}

}
Console.WriteLine(sum);

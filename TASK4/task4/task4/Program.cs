// See https://aka.ms/new-console-template for more information
// Verilmish adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm

string [] names = { "Ali", "Nurlan", "Anvar", "Sevda", "Arzu", "Aykhan" };

for (int i = 0; i < names.Length; i++)
{
	if (names[i].StartsWith("A"))
	{
		Console.WriteLine(names[i]);
    }

}

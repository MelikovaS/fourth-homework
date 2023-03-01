// Verilmish adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm

let names = ["Ali", "Nurlan", "Anvar",  "Sevda", "Arzu" , "Aykhan"];

for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("A")) {
        console.log(names[i]);
    }
       
}

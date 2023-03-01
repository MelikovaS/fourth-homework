//Verilmish ishciler siyahisinda (ischiler obyekt sheklindedir ve firstName,lastName,salary deyerleri var) maashi 500-den yuxari olan ishcileri ekrana chap eden alqoritm.

let list = [
   { firstName: "Susan",
    lastName: "Connor",
    sallary: 457
} ,
{ firstName: "Margaret",
    lastName: "Adelman",
    sallary: 670
} ,
{ firstName: "Roger",
    lastName: "Johnson",
    sallary: 1290
} ,
{ firstName: "Melvin",
    lastName: "Forbis",
    sallary: 490
} ,
];
 for (let i = 0; i < list.length; i++) {
   if (list[i].sallary > 500) {

      console.log(list[i]);
   }
    
 }

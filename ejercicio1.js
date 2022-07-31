class coche {
 constructor(nro_puertas) {
  this.nropuertas = nro_puertas;
 }
 add_nropuertas() {
  this.nropuertas++;
 }
}

function suma(number1, number2, number3) {
 return number1 + number2 + number3;
}

export default function ejercicio1_main() {
 /*1ra parte*/
 let mysuma = suma(5, 10, 15)
 console.log(mysuma)
 /*2da parte*/
 let mycoche = new coche(6)
 mycoche.add_nropuertas()
 console.log(mycoche.nropuertas)
}
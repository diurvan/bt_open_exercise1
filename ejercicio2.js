function functionIsPositive(numeroif) {
 console.log('El número es %s.', numeroif>=0?'Positivo':'Negativo');
}
function functionWhile() {
 let numerowhile = 0;
 while(numerowhile < 3){
  console.log('While %s.',numerowhile)
  numerowhile++
 }
}
function functionDoWhile() {
 let numerowhile = 0;
 do{
  console.log('DoWhile %s',numerowhile)
  numerowhile++
 }while(numerowhile == 0)
}
function functionFor() {
 for(var numeroFor = 0; numeroFor <= 3; numeroFor++){
  console.log('For %s.', numeroFor)
 }
}
function functionSwith(estacion){
 switch (estacion) {
  case 'Primavera':
    console.log('Switch: Estamos en %s', estacion);
    break;
  case 'Verano':
   console.log('Switch: Estamos en %s', estacion);
    break;
  case 'Otoño':
   console.log('Switch: Estamos en %s', estacion);
    break;
  case 'Invierno':
   console.log('Switch: Estamos en %s', estacion);
    break;
  default:
    console.log('Switch: No viene estación');
 }
}


export default function ejercicio2_main() {
 /*1ra parte*/
 functionIsPositive(-4);
 /*2da parte*/
 functionWhile();
 /*3ra parte*/
 functionDoWhile();
 /*4ta parte*/
 functionFor();
 /*5ta parte*/
 functionSwith('Primavera');
 functionSwith('Verano');
 functionSwith('Otoño');
 functionSwith('Invierno');
 functionSwith('Otro');
}
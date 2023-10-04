//- creare variabile kilometriPercorsi
let kilometriPercorsi;
//- prompt dove si chiederá il numero dei kilometri percorsi
kilometriPercorsi = prompt('Quanti kilometri vuoi percorrere?');
console.log(kilometriPercorsi);
//- chiedere all'utente l'etá
//- creare variabile eta
let eta;
//- prompt dove si chiederá l'etá
eta = prompt('Quanti anni hai?');
console.log(eta);
//- calcolcare il prezzo totale del viaggio 
//- 1km costo 0,21 
// - creare variabile const km 
const km = 0.21;
let sconto;
let prezzoScontato;
//  - creare variabile prezzo base
let prezzoBase;
//    - calcolare il prezzo base
prezzoBase = kilometriPercorsi * km;
console.log(prezzoBase)
//  - Se l'utente ha meno di 18 anni
//    - calcolare lo sconto del 20%
if(eta < 18){
  sconto = prezzoBase * 20 / 100;
  prezzoScontato = prezzoBase - sconto;
  let prezzo = prezzoScontato.toFixed(2);
  console.log(prezzo);
}
//  - ALTRIMENTI SE ha piú di 65 anni
//    - calcolare lo scotno del 40%
//    - prezzo in forma decimale 
else if(eta > 65){
  sconto = prezzoBase * 40 / 100;
  prezzoScontato = prezzoBase - sconto;
  let prezzo = prezzoScontato.toFixed(2);
  console.log(prezzo);
}
//  - ALTRIMENTI
//    - page il prezzo intero
//    - prezzo in forma decimale  
else{
  console.log(prezzoBase);
}

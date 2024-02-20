let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
  console.log('numeroUm tem valor 1, mas é do tipo número(Number)\nstringUm tem valor 1, mas é do tipo caractere(String)\n');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
  console.log('numeroTrinta tem valor 30, mas é do tipo número(Number)\nstringTrinta tem valor 30, mas é do tipo caractere(String)\n');
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
  console.log('numeroDez tem valor 10, mas é do tipo número(Number)\nstringDez tem valor 10, mas é do tipo caractere(String)');
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}
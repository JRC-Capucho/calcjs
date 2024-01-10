// Create calc
// Propor nao pode parar de rodar
// Lacos de repeticoes

var numberOne;
var numberTwo;

// JA TEM OS NUMEROS
function conta() {
  soma();
  subtrair();
  dividir();
  multiplicar();
}

//   console.log(n1);
//   console.log(n2)}

// Somar
function soma() {
  let n1 = document.getElementById("numberOne").value; // Sempre pega como String
  let n2 = document.getElementById("numberTwo").value; // Sempre pega como String
  n1 = Number(n1); // Transformar uma String para Number
  n2 = Number(n2); // Transformar uma String para Number
  const result = n1 + n2;
  resultado(result);
}

// Subtrair
function subtrair() {
  let n1 = document.getElementById("numberOne").value; // Sempre pega como String
  let n2 = document.getElementById("numberTwo").value; // Sempre pega como String
  n1 = Number(n1); // Transformar uma String para Number
  n2 = Number(n2); // Transformar uma String para Number
  const result = n1 - n2;
  resultado(result);
}

// Dividir
function dividir() {
  let n1 = document.getElementById("numberOne").value; // Sempre pega como String
  let n2 = document.getElementById("numberTwo").value; // Sempre pega como String
  n1 = Number(n1); // Transformar uma String para Number
  n2 = Number(n2); // Transformar uma String para Number
  const result = n1 / n2;
  resultado(result);
}

// Multiplicar
function multiplicar() {
  let n1 = document.getElementById("numberOne").value; // Sempre pega como String
  let n2 = document.getElementById("numberTwo").value; // Sempre pega como String
  n1 = Number(n1); // Transformar uma String para Number
  n1 = Number(n2); // Transformar uma String para Number
  const result = n1 * n2;
  resultado(result);
}

// Receber o numero
function resultado(result) {
  document.getElementById("resultado").value = result;
}

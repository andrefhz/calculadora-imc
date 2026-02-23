let calcular = document.getElementById("calcular");

function imc() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");

  if (nome === "" || altura === "" || peso === "") {
    resultado.textContent = "Preencha todos os campos !";
  } else {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal.";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "obesidade grau II.";
    } else {
      classificacao = "obesidade grau III.";
    }
    resultado.textContent =
      nome + " seu IMC é " + valorIMC + " e você está com " + classificacao;
  }
}

calcular.addEventListener("click", imc);

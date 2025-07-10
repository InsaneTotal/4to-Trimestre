const numeros = document.getElementsByClassName("numero");
const operadores = document.getElementsByClassName("operador");
const resultados = document.getElementById("resultado");
let pantalla = resultados.value;
let punto = false;
let oper = false;

function calcularPorcentaje(valor) {
  return valor / 100;
}

function actualizarPantalla(valor) {
  resultados.value = valor;
}

Array.from(numeros).forEach((element) => {
  element.addEventListener("click", () => {
    resultados.value === "0"
      ? (resultados.value = element.value)
      : (resultados.value += element.value);
    console.log(oper, punto);
  });
});

Array.from(operadores).forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    if (resultados.value == 0) {
      if (element.value == ".") {
        resultados.value += element.value;
      } else {
        alert("Formato invalido");
      }
    } else if (element.value == "<") {
      if (resultados.value.length <= 1) {
        resultados.value = 0;
      } else {
        resultados.value = resultados.value.slice(0, -1);
      }
    } else if (element.value == "C") {
      resultados.value = 0;
      oper = false;
      punto = false;
    } else if (element.value == "%") {
      resultados.value = calcularPorcentaje(resultados.value);
    } else if (["/", "X", "+", "-"].includes(element.value)) {
      if (oper) {
      } else {
        if (element.value == "X") {
          resultados.value += element.value;

          oper = true;
        } else {
          resultados.value += element.value;
          console.log(element.value);
          oper = true;
        }
      }
    } else if (element.value === ".") {
      if (punto) {
      } else {
        resultados.value += element.value;

        punto = true;
      }
    } else {
      try {
        resultados.value = eval(resultados.value.replace("X", "*"));
        oper = false;
        punto = false;
        setTimeout(() => {
          resultados.value = "0";
        }, 2000);
      } catch (error) {
        console.log(error);
        resultados.value = "Error";
      }
    }
  });
});

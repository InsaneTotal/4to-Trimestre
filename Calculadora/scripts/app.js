const buttons = document.querySelectorAll("button");
const display = document.getElementById("resultado");
const on_off = document.getElementById("btn-on-off");
on_off.value = true;
display.value = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let operador = button.value;
    if (operador === "C") {
      cleanDisplay();
    } else if (operador === "<") {
      deleteLast();
    } else if (operador === "%") {
      percent();
    } else if (
      operador == "+" ||
      operador == "-" ||
      operador == "X" ||
      operador == "/"
    ) {
      operators(operador);
    } else if (operador === "=") {
      result();
    } else if (operador === ".") {
      dot(operador);
    } else if (operador === "true") {
      turnOn(operador);
    } else if (operador === "false") {
      turnOn(operador);
    } else {
      numeros(operador);
    }
  });
});

function numeros(valor) {
  if (display.value === "0") {
    display.value = valor;
  } else {
    display.value += valor;
  }
}

function dot(valor) {
  if (!display.value.includes(".")) {
    display.value += valor;
  } else {
    alert("Formato invalido");
  }
}

function operators(value) {
  if (display.value == "0") {
    Swal.fire({
      title: "Error",
      titleText: "Formato Invalido",
      icon: "error",
    });
  } else {
    display.value += value;
  }
}

function percent() {
  display.value = display.value / 100;
}

function result() {
  const div = eval(display.value.replace("X", "*"));
  div == Infinity ? (display.value = "Error") : (display.value = div);
  setTimeout(() => {
    display.value = 0;
  }, 2000);
}

function deleteLast() {
  if (display.value.length <= 1) {
    display.value = 0;
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function cleanDisplay() {
  display.value = 0;
}

function turnOn(valor) {
  if (valor == "true") {
    on_off.classList.add("turn-off");
    on_off.classList.remove("turn-on");
    on_off.value = "false";
    on_off.innerText = "Off";
    display.value = null;
    buttons.forEach((btn) => {
      btn.disabled = true;
    });
    on_off.disabled = false;
  } else {
    on_off.classList.add("turn-on");
    on_off.classList.remove("turn-off");
    on_off.value = "true";
    on_off.innerText = "On";
    display.value = "0";
    buttons.forEach((btn) => {
      btn.disabled = false;
    });
  }
}

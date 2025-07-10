const fondos = [
  "url('/manejoDOM/assets/img/s25-ultra.jpg')",
  "url('/manejoDOM/assets/img/iphone15-promax.jpeg')",
  "url('/manejoDOM/assets/img/Xiaomi-14-Ultra.jpeg')",
  "url('/manejoDOM/assets/img/oneplus-pro.jpg')",
  "url('/manejoDOM/assets/img/pixel-9-pro.jpeg')",
];
// let statuBackground = true;
const cellphones = document.getElementsByClassName("clasificacion");
// document.body.addEventListener("click", async () => {
//   document.body.style.backgroundImage =
//     "url('/manejoDOM/assets/img/fondo-tec.jpg')";
//   document.body.style.backgroundSize = "cover";
//   document.body.style.backgroundPosition = "center";
//   document.body.style.transition = "background-image .5s ease";
// });

fondos.map((i) => {
  console.log(i);
});

for (const cellphone of cellphones) {
  cellphone.addEventListener("mouseenter", (e) => {
    // statuBackground = false;
    if (e.target.innerHTML == "Galaxy S25 Ultra") {
      document.body.style.backgroundImage = fondos[0];
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.transition = "background-image .5s ease";
    }
    if (e.target.innerHTML == "Iphone 15 Pro Max") {
      document.body.style.backgroundImage = fondos[1];
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.transition = "background-image .5s ease";
    }
    if (e.target.innerHTML == "Xiaomi 14 Ultra") {
      document.body.style.backgroundImage = fondos[2];
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.transition = "background-image .5s ease";
    }
    if (e.target.innerHTML == "OnePlus 12 Pro") {
      document.body.style.backgroundImage = fondos[3];
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.transition = "background-image .5s ease";
    }
    if (e.target.innerHTML == "Pixel 9 Pro") {
      document.body.style.backgroundImage = fondos[4];
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.transition = "background-image .5s ease";
    }
  });
  cellphone.addEventListener("mouseleave", (e) => {
    document.body.style.backgroundImage =
      "url('/manejoDOM/assets/img/fondo-tec.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background-image .5s ease";
  });
}

// console.log(cellphones[0].innerHTML);

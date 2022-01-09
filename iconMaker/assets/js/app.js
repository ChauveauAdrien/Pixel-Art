// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

// -----------------------FONCTION----------------------------
// -- Fonction qui redimensionne les grilles
// -----------------------------------------------------------
// function resizeGrid() {
//   let screen = $(".app-screen");
//   let btn32 = $(".size-btn-32");
//   let btn64 = $(".size-btn-64");
//   let info = $(".info");
//   btn32.click(function () {
//     let pixels = $(".pixel");
//     pixels.remove();
//     info.remove();
//     let btn32Value = $(this).val();
//     screen.css({
//       "display": "grid",
//       "grid-template-columns": "repeat(32, 2vmin)",
//       "grid-template-rows": "repeat(32, 2vmin)",
//     });
//     createPixel(btn32Value);
//   });
//   btn64.click(function () {
//     let pixels = $(".pixel");
//     pixels.remove();
//     info.remove();
//     let btn64Value = $(this).val();
//     screen.css({
//       "display": "grid",
//       "grid-template-columns": "repeat(64, 1vmin)",
//       "grid-template-rows": "repeat(64, 1vmin)",
//     });
//     createPixel(btn64Value);

//   });
// }
function createPixel(size) {
  let pixelDiv = '<div class="pixel"></div>';
  $(".app-screen").append(pixelDiv.repeat(size * size));
}
// -----------------------FONCTION----------------------------
// -- Fonction qui ajoute des nouvelles couleurs
// -----------------------------------------------------------
function addColor() {
  let addBtn = $(".add");
  let newColor = $("#colorPicker");
  let btns = $(".buttons");
  addBtn.click(function () {
    let color = newColor.val();
    btns.prepend('<button id="new-color" class="swatch"></button>');
    let newBtn = btns.children().first();
    let activeBtn = document.querySelector(".is-active");
    activeBtn.classList.remove("is-active");
    newBtn.addClass("is-active").css("background", color);
    let btnadd = $(".swatch");
    btnadd.click(function () {
      let activeBtn = document.querySelector(".is-active");
      activeBtn.classList.remove("is-active");
      $(this).addClass("is-active");
    });
  });
}

// -----------------------FONCTION----------------------------
// -- Fonction qui active et desactive les boutons de couleurs
// -----------------------------------------------------------
function activateBtn() {
  let btn = $(".swatch");
  btn.click(function () {
    let activeBtn = document.querySelector(".is-active");
    activeBtn.classList.remove("is-active");
    $(this).addClass("is-active");
  });
}

// -----------------------FONCTION----------------------------
// -- Fonction qui colore les pixels en fonction du bouton actif
// -----------------------------------------------------------
function colorPixel() {
  let pixel = $(".pixel");
  pixel.click(function () {
    let colorActiveBtn = $(".is-active");
    let color = colorActiveBtn.css("backgroundColor");
    $(this).css({ background: color, border: "none" });
  });
}

// -----------------------FONCTION----------------------------
// -- Fonction qui gomme le pixel au double click
// -----------------------------------------------------------
function erase() {
  let pixel = $(".pixel");
  pixel.dblclick(function () {
    $(this).css({ background: "none", border: "1px solid rgb(221, 221, 221)" });
  });
}

// -----------------------FONCTION----------------------------
// -- Fonction qui reset la page
// -----------------------------------------------------------
function resetPixel() {
  let resetBtn = $("#reset");
  let pixels = $(".app-screen").children();
  resetBtn.click(function () {
    pixels.css({ background: "none", border: "1px solid rgb(221, 221, 221)" });
  });
}

// -----------------------FONCTION----------------------------
// -- Fonction qui permet l'export du dessin
// -----------------------------------------------------------
function exportBtn() {
  let exp = $("#export");
  exp.click(function () {
    domtoimage
      .toJpeg(document.getElementById("content"))
      .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "image.jpeg";
        link.href = dataUrl;
        link.click();
      });
  });
}
// Fonction ready
$(function () {
  createPixel(32);
  // resizeGrid();
  addColor();
  activateBtn();
  colorPixel();
  resetPixel();
  erase();
  exportBtn();
});

// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

function createPixel() {
  let pixelDiv = '<div class="pixel"></div>';
  $(".app-screen").append(pixelDiv.repeat(1024));
}

function pickPixel() {
  let darkestgreen = $(".bg_darkestgreen");
  let darkgreen = $(".bg_darkgreen");
  let green = $(".bg_green");
  let lightgreen = $(".bg_lightgreen");

  // -----------------------------------------------------------
  // vert foncé
  // -----------------------------------------------------------
  darkestgreen.click(function () {
    let getActiveElmt = document.querySelector(".is-active");
    getActiveElmt.classList.remove("is-active");
    darkestgreen.addClass("is-active");
    let color = darkestgreen.css("backgroundColor");
    let pixels = $(".pixel");
    pixels.click(function () {
      $(this).css("background", color);
    });
  });
  // -----------------------------------------------------------
  // vert moins foncé
  // -----------------------------------------------------------
  darkgreen.click(function () {
    let getActiveElmt = document.querySelector(".is-active");
    getActiveElmt.classList.remove("is-active");
    darkgreen.addClass("is-active");
    let color = darkgreen.css("backgroundColor");
    let pixels = $(".pixel");
    pixels.click(function () {
      $(this).css("background", color);
    });
  });
  // -----------------------------------------------------------
  // vert un peu foncé
  // -----------------------------------------------------------
  green.click(function () {
    let getActiveElmt = document.querySelector(".is-active");
    getActiveElmt.classList.remove("is-active");
    green.addClass("is-active");
    let color = green.css("backgroundColor");
    let pixels = $(".pixel");
    pixels.click(function () {
      $(this).css("background", color);
    });
  });
  // -----------------------------------------------------------
  // vert vraiment beaucoup moins foncé, vert clair ducoup
  // -----------------------------------------------------------
  lightgreen.click(function () {
    let getActiveElmt = document.querySelector(".is-active");
    getActiveElmt.classList.remove("is-active");
    lightgreen.addClass("is-active");
    let color = lightgreen.css("backgroundColor");
    let pixels = $(".pixel");
    pixels.click(function () {
      $(this).css("background", color);
    });
  });
}

function erase() {
  let pixel = $(".pixel");
  pixel.dblclick(function () {
    $(this).css("background", "none");
  });
}

function resetPixel() {
  let resetBtn = $("#reset");
  let pixels = $(".app-screen").children();
  resetBtn.click(function () {
    pixels.css("background", "none");
  });
}
function exportBtn(){
  let exp = $('#export');
  exp.click(function(){
      domtoimage.toJpeg(document.getElementById('content'))
      .then(function(dataUrl){
          let link = document.createElement('a');
          link.download = 'image.jpeg';
          link.href = dataUrl;
          link.click();
      });
  });
}




$(function () {
  createPixel();
  pickPixel();
  resetPixel();
  erase();
  exportBtn();

});

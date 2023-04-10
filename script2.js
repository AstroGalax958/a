window.onscroll = function() {
  mostrarBoton();
};

function mostrarBoton() {
  var boton = document.querySelector('.ir-arriba');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    boton.style.display = 'block';
  } else {
    boton.style.display = 'none';
  }
}
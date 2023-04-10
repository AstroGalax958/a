var header = document.getElementById('Header')

window.addEventListener('scroll', ()=> {

  var scroll = window.scrollY

  if (scroll>10) {
      header.style.backgroundColor = '#121212'
  } else {
      header.style.backgroundColor = 'transparent'
  }
     
})   


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
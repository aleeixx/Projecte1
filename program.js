window.addEventListener("load", function(event) {
    console.log("Todos los recursos terminaron de cargar!");
    

    function Mostra(){
      console.log("click");

    var cartaImatge = this.querySelector(".parella");
    var cartapoker = this.querySelector(".poker");
    cartapoker.classList.add("amaga");
    cartaImatge.classList.remove("amaga");

    


/**
 *    var style = window.getComputedStyle(cartapoker);
    var mostra = style.getPropertyValue('display');
    console.log(mostra);
 */


  

  }
var taula =  document.querySelectorAll(".cela");
var arrayImatges = document.querySelectorAll(".parella");

for (let i = 0; i < taula.length; i++) {
  taula[i].addEventListener("click",Mostra);
  arrayImatges[i].classList.add("amaga");

}

  });

  


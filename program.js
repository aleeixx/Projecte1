window.addEventListener("load", function(event) {
  
    
  var taula =  document.querySelectorAll(".cela");

  for (let i = 0; i < taula.length; i++) {
  taula[i].addEventListener("click",Mostra);
  }

  var torn = 0;
  var carta1;
  var carta1SRC;
  var carta1Poker;

  
  var carta2;
  var carta2SRC;
  var carta2Poker;


  let temps;

  function repetirCadaSegundo() {
    temps = setTimeout(pausa, 1000);
  }
  
  



  function Mostra(){

      console.log("click");
      torn++;


      


    var cartaImatge = this.querySelector(".parella");
    var cartapoker = this.querySelector(".poker");
    //cartapoker.classList.add("amaga");
    //cartaImatge.classList.remove("amaga");





if (torn==1) {
      carta1SRC=cartaImatge.getAttribute('src');
      carta1=cartaImatge;
      carta1Poker=cartapoker;

      carta1Poker.classList.add("amaga");
      carta1.classList.remove("amaga");
    }

    else{
      carta2SRC=cartaImatge.getAttribute('src');
      carta2=cartaImatge;
      carta2Poker=cartapoker;
      
      if (carta1SRC===carta2SRC) {
        console.log("es la mateixa");
        carta1.classList.remove("amaga");
        carta2.classList.remove("amaga");
        carta1Poker.classList.add("amaga");
        carta2Poker.classList.add("amaga");
      }
      else{
        //repetirCadaSegundo();
        
        carta1.classList.add("amaga");
        carta2.classList.add("amaga");
        carta1Poker.classList.remove("amaga");
        carta2Poker.classList.remove("amaga");


      }
      torn=0;

    }
 
    
    


/**
 *    var style = window.getComputedStyle(cartapoker);
    var mostra = style.getPropertyValue('display');
    console.log(mostra);
 */


  

  }





  });

  


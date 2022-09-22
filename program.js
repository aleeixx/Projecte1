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

 


  function pausa(c1,c2,c1p,c2p) {

    setTimeout(amaga, 2000);
    
    function amaga(){
      c1.classList.add("amaga");
      c2.classList.add("amaga");
      c1p.classList.remove("amaga");
      c2p.classList.remove("amaga");
    }
  }


  
  

  

  function Mostra(){

      console.log("click");
      torn++;

      
       //const music = new Audio('prova.mp3');
      //music.play();
      
     
      



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
      


      //sigui igual o no es mostrarà la imatge
      carta2Poker.classList.add("amaga");
      carta2.classList.remove("amaga");
      

      if (carta1SRC===carta2SRC ) {

        //&& carta1.getAttribute('id')!=carta2.getAttribute('id')
        console.log("es la mateixa");
        //carta1.classList.remove("amaga");
        
        //carta1Poker.classList.add("amaga");
        //carta2Poker.classList.add("amaga");
      }
      else{

        pausa(carta1,carta2,carta1Poker,carta2Poker);
        
        /**
         *           carta1.classList.add("amaga");
        carta2.classList.add("amaga");
        carta1Poker.classList.remove("amaga");
        carta2Poker.classList.remove("amaga");
         */

         
        


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

  


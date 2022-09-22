window.addEventListener("load", function(event) {
  
    
  var taula =  document.querySelectorAll(".cela");

  for (let i = 0; i < taula.length; i++) {
  taula[i].addEventListener("click",Mostra);
  //taula[i].removeEventListener("click");
  }

  var torn = 0;
  var carta1;
  var carta1SRC;
  var carta1Poker;
  var cela1;
  
  var carta2;
  var carta2SRC;
  var carta2Poker;
  var cela2;




 


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

    //ella mateixa ja que si posem this.querySelector(".poker"); posa
    var cela = this;
    //cartapoker.classList.add("amaga");
    //cartaImatge.classList.remove("amaga");





if (torn==1) {
      carta1SRC=cartaImatge.getAttribute('src');
      carta1=cartaImatge;
      carta1Poker=cartapoker;
      cela1=cela;


      carta1Poker.classList.add("amaga");
      carta1.classList.remove("amaga");
    }

    else{
      carta2SRC=cartaImatge.getAttribute('src');
      carta2=cartaImatge;
      carta2Poker=cartapoker;
      cela2=cela;


      //sigui igual o no es mostrarà la imatge
      carta2Poker.classList.add("amaga");
      carta2.classList.remove("amaga");
      

      if (carta1SRC===carta2SRC) {

      

        if(carta1.getAttribute('id')!=carta2.getAttribute('id')){
          
          console.log("es la mateixa");
            cela1.removeEventListener("click",Mostra);
            cela2.removeEventListener("click",Mostra);


        }
        else{
          console.log("ERROR: has clicat dos cops a una mateixa carta clica'n una altra");
          // carta1.classList.add("amaga");
          // carta1Poker.classList.remove("amaga");


          //Perquè en comptes de que quan cliquis a sobre i sigui l mateixa casella com he fet abans i tornis de nou a escollir
          //dues cartes doncs un cop has triat la primera t'obligui a escollir-ne una segona q no sigui la mateixa.
          //per aixo el torn 3 que detecta que es akest cas i fa lo esmenat.
          torn=3;

        }


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
      
      if(torn!=3){
        torn=0;
      }
      

    }
 
    
    


/**
 *    var style = window.getComputedStyle(cartapoker);
    var mostra = style.getPropertyValue('display');
    console.log(mostra);
 */


  

  }





  });

  


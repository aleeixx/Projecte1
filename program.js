//Per el tauler
window.addEventListener("load", function (event) {



  //varrejar jugadors
  for (let i = jugadors.length - 1; 0<i; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jugadors[i];
    jugadors[i] = jugadors[j];
    jugadors[j] = temp;
  }


  //llista de puntuacions que comencin des de 0 tots
  var puntuacions = new Array(jugadors.length);

  for (let n = 0; n < puntuacions.length; n++) {
    puntuacions[n]=0;
    
  }

  var taula = document.querySelectorAll(".cela");

  //recollir dades de div i inserir dades a tauler

  var dades = document.querySelector("#dades");
  var dinsDivJugador = " ";
  dades.innerHTML = " ";




  for (let k = 1; k <= jugadors.length; k++) {
          
    //console.log(onInserirNoms);
    dades.innerHTML += 
    '<div id="jugador'+k+'"></div>';
    
    for (let l = 0; l < 1; l++) {
          
      //console.log(onInserirNoms);
      dinsDivJugador = document.querySelector('#jugador'+k);
      //console.log(dinsDivJugador);

      dinsDivJugador.innerHTML =       

      '<div id="jugador'+k+'nom"><h1>'+jugadors[k-1]+'</h1></div>'+
      '<div id="jugador'+k+'contenidorContador">'+
        '<div id="jugador'+k+'contadorTitol" class="titols"><h1>Contador</h1></div>'+
        '<div id="jugador'+k+'contador" class="numeros">0</div>'+
      '</div>'+
      '<div id="jugador'+k+'contenidorPuntuacio">'+
        '<div id="jugador'+k+'PuntuacioTitol" class="titols"><h1>Puntuació</h1></div>'+
        '<div id="jugador'+k+'puntuacio" class="numeros">0</div>'+
      '</div>';
     

    }
    
  }


  var modParellesTrobades = " ";


  ////


  for (let i = 0; i < taula.length; i++) {
    taula[i].addEventListener("click", Mostra);
    //taula[i].removeEventListener("click");
  }



  var segons = 0;


  var torn = 0;
  var parellaTrobada = 0;
  var parellesTotalsTrobades = 0;


  //per cada cop que sigui torn 1 pujarà el contador
  var quinJugador = 0;



  var carta1;
  var carta1SRC;
  var carta1Poker;
  var cela1;

  var carta2;
  var carta2SRC;
  var carta2Poker;
  var cela2;





 var aQuiliToca = document.querySelector('#liTocaA');

 aQuiliToca.innerHTML=jugadors[0];
 

 var contadorTotalPartida = document.querySelector("#contadorTotal");
 contadorTotalPartida.innerHTML=segons;
 

 contadorRetard();





 function contadorRetard() {


  setTimeout(contador, 1000);


  function contador() {
    segons++;
    contadorTotalPartida.innerHTML=segons;
    contadorRetard();
  }
}


 function pausa(c1, c2, c1p, c2p) {

    setTimeout(amaga, 1000);

    function amaga() {

      torn = 0
      c1.classList.add("amaga");
      c2.classList.add("amaga");
      c1p.classList.remove("amaga");
      c2p.classList.remove("amaga");
      //llest = true;

    }
  }


  

  function Mostra() {


    console.log("click");

    torn++;

//després de les dos primeres fa torn 3 o 4 o 5 o 6 que no està especificat. de manera que funciona.
    //console.log("torn "+torn);

    var cartaImatge = this.querySelector(".parella");
    var cartapoker = this.querySelector(".poker");
    //ella mateixa ja que si posem this.querySelector(".poker"); posa
    var cela = this;



    switch (torn) {
      case 1:

      quinJugador++;
        if (quinJugador==jugadors.length+1) {
          quinJugador=1;
        }

        carta1SRC = cartaImatge.getAttribute('src');
        carta1 = cartaImatge;
        carta1Poker = cartapoker;
        cela1 = cela;

        carta1Poker.classList.add("amaga");
        carta1.classList.remove("amaga");


        break;


      case 2:



        carta2SRC = cartaImatge.getAttribute('src');
        carta2 = cartaImatge;
        carta2Poker = cartapoker;
        cela2 = cela;


        //sigui igual o no es mostrarà la imatge
        carta2Poker.classList.add("amaga");
        carta2.classList.remove("amaga");


        if (carta1SRC === carta2SRC) {


          if (carta1.getAttribute('id') != carta2.getAttribute('id')) {
            console.log("es la mateixa");
            cela1.removeEventListener("click", Mostra);
            cela2.removeEventListener("click", Mostra);

            parellesTotalsTrobades++;
            parellaTrobada++;
            puntuacions[quinJugador-1]+=parellaTrobada;

            modParellesTrobades = document.querySelector('#jugador'+quinJugador+'puntuacio');

            console.log(modParellesTrobades);

            modParellesTrobades.innerHTML = puntuacions[quinJugador-1];

            
            parellaTrobada=0;
            torn = 0;
            quinJugador--;


            if (parellesTotalsTrobades==parelles) {
             window.location.replace("index.html");
             }

          }

          else {
            //Perque al tornar a clicar el contador augmentarà i serà dos serà 2
            torn = 1;
          }
        }


        else {
          pausa(carta1, carta2, carta1Poker, carta2Poker);
        }



        if (quinJugador==jugadors.length) {
          
          aQuiliToca.innerHTML=jugadors[0];
        }
        else{
          
          aQuiliToca.innerHTML=jugadors[quinJugador];
        }

        break;


    }
  }
});
//const music = new Audio('prova.mp3');
//music.play();
window.addEventListener("load", function(event) {
    
    var numNoms = document.querySelector("#players");
    numNoms.addEventListener("change", comprovaJugadors);
    var onInserirNoms = document.querySelector("#pJugadors");
    
    
    function comprovaJugadors(){

      onInserirNoms.innerHTML = '';

      // var hola = document.querySelector("#players");
      // var valor = hola.value;
      console.log(numNoms.value);

        for (let i = 0; i < numNoms.value; i++) {
          
          //console.log(onInserirNoms);
          onInserirNoms.innerHTML += '<p><input type="text" id="nomJugador'+(i+1)+'" name="nomJugador[]" placeholder="Nom Jugador '+(i+1)+'" class="nomsTotals"required></p>';
          
          

        }
      }
});
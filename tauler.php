<?php 

//Crearem un array on guardarem un string amb el nom de les imatges
$imatges = array("couple1.png", 
                 "couple2.png", 
                 "couple3.png", 
                 "couple4.png", 
                 "couple5.png",  
                 "couple6.png",
                 "couple7.png",
                 "couple8.png",
                 "couple9.png",
                 "couple10.png"
                );
//Guardem la categoria que ens hauran passat pel formulari
$familia=$_POST["Family"];

$jugadors=$_POST["nomJugador"];


if($familia=="Random"){
    
    switch (rand(0, 1)) {
        case 0:
            $familia="Animals";
            break;
        case 1:
            $familia="Food";
            break;
       
    }
}

//Si el número no és parell/múltiple de dos...

//falla si poses 6 per 4 pq 24 la meitat es 12 i no hi ha tants elements a larray max 8 es a dir 4*4 que es 16 i son 8 parelles el num delements de larray
if($_POST["columnes"]*$_POST["files"]%2==0 and $_POST["columnes"]*$_POST["files"]<=16 and $_POST["columnes"]*$_POST["files"]>1){

    

    //Agafarem el número de parelles que necessitarem
    $nParelles = $_POST["columnes"]*$_POST["files"]/2;
    

    //I barrejarem el que tenim a l'array
    shuffle($imatges);

       
    //Farem que mentres el número de valors a l'array sigui diferents a el número de parelles que necessitem es vagi borrant.

//
    while (count($imatges)!=$nParelles) {
    unset($imatges[count($imatges)-1]);
}
/*
PROVES:
    foreach( $imatges as $variableName ) {
        // action to perform
        echo $variableName . "\n";

    }
*/
    for ($h=0; $h < $nParelles ; $h++) { 
        array_push($imatges,$imatges[$h]);
    }

    /*
    foreach( $imatges as $variableName1 ) {
        // action to perform
        echo " ///////".$variableName1;

    }
    */

    shuffle($imatges);
    
    //Crearem un contador que augmentarà perquè a cada cel·la posem una imatge de l'array
    $contador = 0;




?>

<html>
 <head>
  <title>Prova</title>
  <link rel="stylesheet" href="tauler.css" type="text/css">
  <script>
    let jugadors=<?php echo json_encode($jugadors);?>;
    let parelles=<?php echo $nParelles;?>;


    // console.log(jugadors);
  </script>
  <script src="program.js"></script>
 </head>
 <body>


 <div id="dades">

    


 </div>
 <?php 



// $jugadors=$_POST["nomJugador"];

// echo json_encode($jugadors);


/*
En cas de que sigui random generarem un número aleatori entre el 0 i l'1 i que segons el que surti la categoria sigui igual a 
Animals o Food
*/


    
    
    
    //////////////////////
    
    
    echo "<div id='dTable'> <table>";


    //Farem un for niuat per a crear les files i les columnes

for ($i=0; $i < $_POST["files"]; $i++) { 
    echo "<tr>";
    for ($j=0; $j < $_POST["columnes"]; $j++) {
        
        ?>
         
        <td class="cela">
            <!---         <img src='imatges/animals/couple1.png' class='parella'> 
            
            rand(0,count($imatges))

            
            --->

            <!--- segons la família/categoria entrarà a una carpeta o una altra i he creat un contador que augmenti per cada 
            cel·la que es crei.
            
            --->

        <img src="imatges/<?php echo strtolower($familia."/".$imatges[$contador]); ?>" alt=""  id="<?php echo $contador ?>" class="parella amaga">
        <img src='imatges/as.png' class='poker'>
        </td>

        <?php 
        $contador++;
    }
    echo "</tr>";
    
}
echo "</table> </div>";
}
else{

    ?>

<div id="malament">

    <h1 class='incorrecte'>EL VALOR ÉS INCORRECTE</h1>
     <a href="index.html" class="previous">GO BACK!</a>


</div>

     <?php 
}


 ?>
 </body>


</html>
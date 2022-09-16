<html>
 <head>
  <title>Prova</title>
  <link rel="stylesheet" href="tauler.css" type="text/css">
 </head>
 <body>
 <?php 

$imatges = array("couple1.png", 
                 "couple2.png", 
                 "couple3.png", 
                 "couple4.png", 
                 "couple5.png",  
                 "couple6.png",
                 "couple7.png",
                 "couple8.png"
                );






if($_POST["columnes"]*$_POST["files"]%2==0){


    $nParelles = $_POST["columnes"]*$_POST["files"]/2;
    
    $contador = 0;


    shuffle($imatges);

       
while (count($imatges)!=$nParelles) {
    unset($imatges[count($imatges)-1]);
}

    foreach( $imatges as $variableName ) {
        // action to perform
        echo $variableName . "\n";

    }

    for ($h=0; $h < $nParelles ; $h++) { 
        array_push($imatges,$imatges[$h]);
    }

    foreach( $imatges as $variableName1 ) {
        // action to perform
        echo " ///////".$variableName1;

    }

    shuffle($imatges);
    
    echo "<div id='dTable'> <table>";

for ($i=0; $i < $_POST["files"]; $i++) { 
    echo "<tr>";
    for ($j=0; $j < $_POST["columnes"]; $j++) {
        
        ?>
         
        <td>
            <!---         <img src='imatges/animals/couple1.png' class='parella'> 
            
            rand(0,count($imatges))

            //
            --->
        <img src="imatges/<?php echo strtolower($_POST["Family"]."/".$imatges[$contador]); ?>" alt="" class="parella">
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
    echo "<h1>EL VALOR ÉS INCORRECTE</h1>";
}


 ?>
 </body>
</html>
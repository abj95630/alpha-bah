<?php
    $my_array = &$_POST;

    // $email = $my_array["email"];
    // $nom = $my_array["nom"];
    $commentaire = $my_array["commentaire"];

   mail("abah20000@gmail.com",'Page Contact', $commentaire);
   echo "Votre message à été envoyé";
?>
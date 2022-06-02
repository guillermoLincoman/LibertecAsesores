<?php
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']))
    {
        $destinatario = 'guillermo.l@libertec.shop';
        $name = $_POST['name'];
        $email = $_POST['email'];
        $msj = $_POST['message'];
        $header = "Enviado desde la pagina de asesores.";
        $msjCompleto = $msj ."\nAtentamente: " . $name;
        mail($destinatario,$name, $msjCompleto,$header);
        echo "<script> alert('correo enviado exitosamente')</script>";
        echo "<script> setTimeout(\"location.href='contact.html'\",1000)</script>";
    } 
<<<<<<< HEAD:correos.php
?>
=======
?>
>>>>>>> bc51fbe4eca6241d49d51094a2cf44a7355574f5:assets/php/correos.php

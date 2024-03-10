<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Vérifier les informations d'identification (c'est un exemple très basique)
    if ($username === "utilisateur" && $password === "motdepasse") {
        echo "Connexion réussie ! Bienvenue, $username.";
    } else {
        echo "Échec de la connexion. Veuillez vérifier votre nom d'utilisateur et votre mot de passe.";
    }
}
?>

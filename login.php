<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Vérifier les informations d'identification (c'est un exemple très basique)
    if ($username === "utilisateur" && $password === "motdepasse") {
        // Enregistrement dans un fichier
        $file = fopen("utilisateurs.txt", "a"); // Ouverture du fichier en mode ajout
        fwrite($file, "Nom d'utilisateur: $username, Mot de passe: $password\n");
        fclose($file);

        echo "Connexion réussie ! Bienvenue, $username. Les informations ont été enregistrées.";
    } else {
        echo "Échec de la connexion. Veuillez vérifier votre nom d'utilisateur et votre mot de passe.";
    }
}
?>

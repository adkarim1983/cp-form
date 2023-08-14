
// ajouter un Event listener au bouton avec l'ID "envoyer", on le défini pour réagir au clic sur le bouton, pour l'affichage des infos saisies.

document.getElementById("envoyer").addEventListener("click", function() {
// récupèrer la valeur de l'élément HTML avec l'ID "nom"  et la stocker dans la variable nom.
    var nom = document.getElementById("nom").value;
// récupèrer la valeur de l'élément HTML avec l'ID "prenom"  et la stocker dans la variable prenom.
    var prenom = document.getElementById("prenom").value;
// récupèrer la valeur de l'élément avec l'ID "dateNaissance" et la stocker dans la variable dateNaissance.
    var dateNaissance = document.getElementById("dateNaissance").value;
// récupèrer la valeur de l'élément avec l'ID "email"  et la stocker dans la variable email.
    var email = document.getElementById("email").value;
// récupèrer la valeur sélectionnée dans l'élément avec l'ID "sexe" et la stocker dans la variable sexe.
    var sexe = document.getElementById("sexe").value;
// on va faire la même chose pour l'élément avec l'ID "linkedin", en stockant la valeur dans la variable linkedin.
    var linkedin = document.getElementById("linkedin").value;
// de la même manière, pour l'élément avec l'ID "github", en stockant la valeur dans la variable github.
    var github = document.getElementById("github").value;
//  récupèrer la valeur de l'élément avec l'ID "anneesExperience" et la stocker dans la variable anneesExperience.
    var anneesExperience = document.getElementById("anneesExperience").value;
// récupèrer la valeur de l'élément avec ID "texteAdditionnel" et la stocker dans la variable "texteAdditionnel"
    var texteAdditionnel = document.getElementById("texteAdditionnel").value;
// récupèrer le nom du premier fichier sélectionné dans l'élément avec l'ID "image" 
    var fileName = document.getElementById("image").files[0].name;
// aprés, l'etape la plus importante: mettre à jour le contenu HTML de l'élément avec l'ID "submittedData". Cela affiche les informations saisies et collectées à partir du formulaire lorsque le bouton "Envoyer" est cliqué.
    var submittedData = "Nom : " + nom + "<br>" +
                        "Prénom : " + prenom + "<br>" +
                        "Date de Naissance : " + dateNaissance + "<br>" +
                        "E-mail : " + email + "<br>" +
                        "Sexe : " + sexe + "<br>" +
                        "Profil LinkedIn : " + linkedin + "<br>" +
                        "Profil GitHub : " + github + "<br>" +
                        "Années d'expérience : " + anneesExperience + "<br>" +
                        "Texte additionnel : " + texteAdditionnel + "<br>" +
                        "Fichier téléchargé : " + fileName;

    document.getElementById("submittedData").innerHTML = submittedData;
});

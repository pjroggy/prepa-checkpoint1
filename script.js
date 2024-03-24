
let titrePrincipal = document.getElementById("titrePrincipal");

// Variable pour suivre si le titre a été modifié
let titreModifie = false;

// Ajout d'un gestionnaire d'événement de clic sur le titre principal
titrePrincipal.addEventListener("click", function () {
    // Vérifier si le titre a déjà été modifié
    if (!titreModifie) {
        // Demander à l'utilisateur de saisir un nouveau texte pour le titre principal
        let nouveauTitre = prompt("Entrez un nouveau titre :");

        // Vérifier si l'utilisateur a saisi quelque chose et que ce n'est pas annulé
        if (nouveauTitre !== null) {
            // Mettre à jour le contenu du titre principal avec le nouveau texte
            titrePrincipal.textContent = nouveauTitre;

            // Marquer le titre comme modifié
            titreModifie = true;
        }
    }
});

// Récupération de tous les titres sauf le titre principal
let autresTitres = document.querySelectorAll("h2, h3");

// Ajout d'un gestionnaire d'événement de clic à chaque titre
autresTitres.forEach(function (titre) {
    titre.addEventListener("click", function () {
        // Demander à l'utilisateur de saisir une couleur au format hexadécimal
        let couleur = prompt("Entrez une couleur au format hexadécimal (#RRGGBB) :");

        // Vérifier si la couleur saisie est valide
        if (isValidHexColor(couleur)) {
            // Appliquer la couleur aux tous les titres
            autresTitres.forEach(function (titre) {
                titre.style.color = couleur;
            });
        } else {
            // Afficher une alerte si la couleur saisie n'est pas valide
            alert("Veuillez saisir une couleur valide au format hexadécimal (#RRGGBB).");
        }
    });
});

// Fonction pour vérifier si une couleur hexadécimale est valide
function isValidHexColor(color) {
    // Vérifier la longueur de la chaîne de couleur
    if (color.length !== 7 || color.charAt(0) !== '#') {
        return false;
    }

    // Vérifier chaque caractère de la chaîne de couleur
    for (let i = 1; i < color.length; i++) {
        let c = color.charAt(i).toUpperCase();
        if (!('0' <= c && c <= '9') && !('A' <= c && c <= 'F')) {
            return false;
        }
    }

    return true;
}

// Sélection de la section des projets
let sectionProjets = document.querySelector(".projects");

// Sélection de tous les projets
let projets = document.querySelectorAll(".project");

// Parcours de chaque projet
projets.forEach(function (projet) {
    // Création des éléments HTML pour lister les technologies du projet
    let label = document.createElement("label");
    label.textContent = "Technologies utilisées : ";

    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("technologies-input");

    let button = document.createElement("button");
    button.textContent = "Lister";
    button.addEventListener("click", function () {
        listerTechnologies(projet, input);
    });

    let listeTechnologies = document.createElement("ul");

    // Ajout des éléments au projet
    projet.appendChild(label);
    projet.appendChild(input);
    projet.appendChild(button);
    projet.appendChild(listeTechnologies);
});

function listerTechnologies(projet, input) {
    // Récupération des technologies saisies dans l'input
    let technologies = input.value.trim().split(","); // Divise les technologies saisies par une virgule

    // Sélection de la liste des technologies du projet
    let listeTechnologies = projet.querySelector("ul");

    // Efface les anciennes technologies de la liste
    listeTechnologies.innerHTML = "";

    // Ajoute chaque technologie à la liste
    technologies.forEach(function (technologie) {
        let li = document.createElement("li");
        li.textContent = technologie.trim(); // Supprime les espaces blancs autour de la technologie
        listeTechnologies.appendChild(li);
    });
}

 // Temps d'attente en millisecondes avant d'afficher la modale (par exemple, 5000 ms pour 5 secondes)
 let tempsAttente = 5000;

 // Fonction pour afficher la modale avec une blague aléatoire
 function afficherModale() {
     // Tableau de blagues
     let blagues = [
        "qu'est ce qui est jaune et qui attends ?  Jonathan...",
        "qu'est ce qui est vert et qui pousse au fond d'un jardin ? E.T. constipé",
        "pourquoi les belges ont-ils un pyjama quand ils font de la moto ? pour pouvoir se coucher dans les virages",
        "qu'est ce qui est jaune et qui devient rouge en appuyant sur un bouton ? un poussin dans un mixeur"
     ];

     // Sélection aléatoire d'une blague
     let blague = blagues[Math.floor(Math.random() * blagues.length)];

     // Création de la modale
     let modal = document.createElement("div");
     modal.classList.add("modal");
     modal.innerHTML = `
         <div class="modal-content">
             <span class="close">&times;</span>
             <p>${blague}</p>
         </div>
     `;
     document.body.appendChild(modal);

     // Fermeture de la modale lors du clic sur le bouton de fermeture
     let closeBtn = modal.querySelector(".close");
     closeBtn.addEventListener("click", function() {
         modal.remove();
     });
 }

 // Déclenchement de l'affichage de la modale après un certain laps de temps
 setTimeout(afficherModale, 10000);
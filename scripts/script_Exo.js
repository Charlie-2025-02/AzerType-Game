function afficherResultat(score, nombreMotsProposes) {
  //lancerJeu();
  let baliseSpanScore = document.querySelector(".zoneScore span");
  //baliseSpanScore.textContent = score + " / " + nombreMotsProposes;
  let affichageScore = `${score} / ${nombreMotsProposes}`;
  baliseSpanScore.innerText = affichageScore;

  //console.log("Votre score est " + score + " sur " + nombreMotsProposes);
  //console.log("Votre score est " + score + " sur " + listeMots.length);
  //console.log("Votre score est " + score + " sur " + listePhrases.length);
}

/*function choisirPhrasesOuMots() {
  // Déclaration de la variable contenant le choix de l'utilisateur
  let choix = prompt('Veillez choisir la liste :  "mots" ou "phrases" ');
  // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt('Veillez choisir la liste :  "mots" ou "phrases" : ');
  }
  return choix;
}*/

/*function lancerBoucleDeJeu(listeDePropositions) {
  let score = 0;
  // On parcourt le tableau des mots
  for (i = 0; i < listeDePropositions.length; i++) {
    // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
    motUtilisateur = prompt(
      "Entrez le " + (i + 1) + "ème proposition du tableau : " + listeDePropositions[i],
    );
    if (motUtilisateur === listeDePropositions[i]) {
      // Si le mot saisi par l'utilisateur est correct, on incrémente le score
      score++;
    }
  }
  return score;
}*/

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

function lancerJeu() {
  //let choix = choisirPhrasesOuMots();
  let score = 0;
  //let nombreMotsProposes = 0;
  i = 0;
  let listeProposition = listeMots;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(listeProposition[i]);
  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    if (inputEcriture.value === listeProposition[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = "";
    if (listeProposition[i] === undefined) {
      afficherProposition("Vous avez terminé le jeu !");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeProposition[i]);
    }
  });

  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      console.log(event.target.value);
      if (event.target.value === "1") {
        listeProposition = listeMots;
      } else {
        listeProposition = listePhrases;
      }
      afficherProposition(listeProposition[i]);
    });
  }

  /*if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots);
        nombreMotsProposes = listeMots.length;
    } else {
        score = lancerBoucleDeJeu(listePhrases);
        nombreMotsProposes = listePhrases.length;
    }*/

  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value;

    let baliseEmail = document.getElementById("email").value;
    let email = baliseEmail.value;

    console.log("Nom : " + nom + " Email : " + email + " Score : " + score);
    //afficherEmail(baliseNom, baliseEmail, score);
  });

  afficherResultat(score, i);
}

//Demander à l'utilisateur de saisir le premier mot du tableau
/*let motUtilisateur = prompt("Entrez le premier mot du tableau :" + listeMots[0],);
if (motUtilisateur === listeMots[0]) {
  score = score + 1;
}

//Demander à l'utilisateur de saisir le deuxième mot du tableau
motUtilisateur = prompt("Entrez le deuxième mot du tableau :" + listeMots[1]);
if (motUtilisateur === listeMots[1]) {
  score = score + 1;
}

//Demander à l'utilisateur de saisir le troisième mot du tableau
motUtilisateur = prompt("Entrez le troisième mot du tableau :" + listeMots[2]);
if (motUtilisateur === listeMots[2]) {
  score = score + 1;
}

console.log(listeMots);
console.log(score + "/" + listeMots.length);*/

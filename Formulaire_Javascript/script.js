// Chargement du DOM
document.addEventListener("DOMContentLoaded", function() {

  // On assigne un évènement au bouton Valider l'inscription
  var validerForm = document.getElementById('valider');
  validerForm.addEventListener('click', verificationFormulaire);


  // Fonction de vérification du formulaire
  /*
  On vérifie l'ensemble des fonctions du formulaire.
  Si l'ensemble est ok, on affiche le récapitulatif.
  */
  function verificationFormulaire(){
    //document.getElementById('formulaire_inscription').innerHTML = "";
    if(testChampsRenseignes()){ //ajouter l'ensemble des fonctions
      afficheRecapitulatif();
    }

  // Fonction de vérification des champs ci-après :
  function testChampsRenseignes(){
    // Vérification du champ Nom
    var Nom = document.getElementById('nom'); //ou document.querySelector('#nom')

    if(Nom.value == ""){
      showError("Le nom n'a pas été renseigné.");
      return false;
    }

    // Vérification du champ Prénom
    var Prenom = document.querySelectorAll('.prenom')[0]; // queryselector
    if(Prenom.value == ""){
      showError("Le prénom n'a pas été renseigné.");
      return false;
    }
    // Vérification du champ Date
    var Date = document.getElementsByName('date_naissance')[0];
    if(Date.value == "" || Date.value == "JJ/MM/AAAA"){
      showError("La date n'est pas valide.");
      return false;
    }

    // Vérification du champ Numéro  //
    var Telephone = document.getElementById('telephone');
    if(Telephone.value.length < 10){
      showError("Le téléphone n'a pas été renseignée au bon format.");
      return false
    }

    // Vérification du champ Diplpome  //

    var _diplome = document.querySelectorAll('select')[0];
    if(_diplome.value == ""){
      showError("Sélectionner un diplôme.");
      return false
    }

    // Vérification du champ Langages
    var _langage = document.querySelectorAll('[name=langage]');
    var _case_cochees = [];
      for(var i=0; i< _langage.length; i++){
        var el = _langage[i];

        if(el.checked){
          _case_cochees.push(el);
        }
      }

      if(_case_cochees.length <= 0){
        showError("Aucun langage n'a été coché.");
        return false;
      }

      return true;
  }


  // Fonction pour afficher un message d'erreur
  function showError(message){
    alert(message);
    //var elementError = document.getElementById('formulaire_inscription');
    //elementError.innerHTML += "<br>"+message;
  }


// Fonction pour afficher le récapitulatif
  function afficheRecapitulatif(){
    // pour le nom
    var nom = document.getElementById('nom');
    var nomValeur = nom.value;
    var cibleNom = document.getElementById('recap_nom');
    cibleNom.innerHTML = nomValeur;

    //pour le prénom
    var prenom = document.querySelectorAll('.prenom')[0];
    var prenomValeur = prenom.value;
    var ciblePrenom = document.getElementById('recap_prenom');
    ciblePrenom.innerHTML = prenomValeur;

    //pour la date
    var date = document.getElementsByName('date_naissance')[0];
    var dateValeur = date.value;
    var cibleDate = document.getElementById('recap_date');
    cibleDate.innerHTML = dateValeur;

    //pour le numéro
    var Telephone = document.getElementById('telephone');
    var TelephoneValeur = telephone.value;
    var cibleTelephone = document.getElementById('recap_tel');
    cibleTelephone.innerHTML = TelephoneValeur;

    //pour le diplôme
    var _diplome = document.querySelectorAll('select')[0];
    var diplomeValeur = _diplome.value;
    var cibleDiplome = document.getElementById('recap_diplome');
    cibleDiplome.innerHTML = diplomeValeur


    //pour les langages
    var _langage = document.querySelectorAll('[name=langage]');
    var _case_cochees = [];
    for(var i=0; i< _langage.length; i++){
      var el = _langage[i];
      if(el.checked){
        _case_cochees.push(el.value);
      }
    }

    var langageValeur = _case_cochees.join();
    var cibleLangage = document.getElementById('recap_langages');
    cibleLangage.innerHTML = langageValeur;


  }

}

});

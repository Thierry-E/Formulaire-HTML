// récupération des données du formulaire.

function getValue() {
  let civility = document.querySelector('input[name="civility"]:checked').value;
  let firstName = document.getElementById("firstName").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let genre = document.querySelector('input[name="sexe"]:checked').value;
  let email = document.getElementById("email").value;
  let mailingAdress = document.getElementById("mailingAdress").value;
  let postalCode = document.getElementById("postalCode").value;
  let city = document.getElementById("city").value;
  let jobsSelect = document.getElementById("jobsSelect").value;
  let nationality = document.querySelector(
    'input[name="nationality"]:checked'
  ).value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let country = document.getElementById("country").value;
  let socialSecurityNumber = document.getElementById(
    "socialSecurityNumber"
  ).value;
  let passport = document.getElementById("passport").value;
  let deliverance = document.getElementById("deliverance").value;
  let validity = document.getElementById("validity").value;

  // condition pour récupérer la valeur du champ "otherNationality"; lié à l'input "choise5"
  if (document.querySelector('input[id="choise5"]:checked')) {
    nationality = document.getElementById("other").value;
  }

  alert(
    civility +
      " " +
      firstName +
      " " +
      name +
      " " +
      age +
      " " +
      genre +
      " " +
      email +
      " " +
      mailingAdress +
      " " +
      postalCode +
      " " +
      city +
      " " +
      jobsSelect +
      " " +
      nationality +
      " " +
      dateOfBirth +
      " " +
      country +
      " " +
      socialSecurityNumber +
      " " +
      passport +
      " " +
      deliverance +
      " " +
      validity
  );
}

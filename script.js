window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("myBtn");
let email = document.getElementById("email");
let nom = document.getElementById("nom");
let commentaire = document.getElementById("commentaire");
let env = document.getElementById("envoyer");
env.addEventListener("click", submitForm, false);

function scrollFunction() {
  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function createInstance() {
  let req;
  if(window.XMLHttpRequest) {
    req = new XMLHttpRequest
  } else if(window.ActiveXObject) {
    try {
      req = new ActiveXObject("Msxml2.XMLHTTP")
    } catch(e) {
      try {
        req = new ActiveXObject("Microsoft.XMLHTTP")
      } catch(e) {
        document.getElementById("reponse").innerHTML = "Non crée";
      }
    }
  }
  return req;
}


function submitForm(e) {
  e.preventDefault();
  let req = createInstance();
  let data = "email=" + email.value + "&nom="+ nom.value + "&commentaire=" + commentaire.value;
 
  req.onreadystatechange = function() {
    if(req.readyState === 4 && req.status === 200) {
      document.getElementById("reponse").innerHTML = req.responseText;
    } 
  } 

  req.open('POST', 'mail.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.send(data);
}


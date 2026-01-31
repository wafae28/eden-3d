document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let formData = new FormData(this);
  
    fetch("send_mail.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").innerHTML = data;
      document.getElementById("contactForm").reset();
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "Erreur lors de l'envoi.";
    });
  });
  
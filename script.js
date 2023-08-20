document.addEventListener("DOMContentLoaded", function() {
    const voirPlusButton = document.getElementById("voirPlus");
    const voirMoinsButton = document.getElementById("voirMoins");
    const texteAbrégé = document.getElementById("texteAbrégé");
    const texteComplet = document.getElementById("texteComplet");
  
    voirPlusButton.addEventListener("click", () => {
      texteAbrégé.style.display = "none";
      texteComplet.style.display = "block";
      voirPlusButton.style.display = "none";
      voirMoinsButton.style.display = "inline-block";
    });
  
    voirMoinsButton.addEventListener("click", () => {
      texteAbrégé.style.display = "block";
      texteComplet.style.display = "none";
      voirPlusButton.style.display = "inline-block";
      voirMoinsButton.style.display = "none";
    });
  });
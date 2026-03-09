/* ==========================================
   PAGE ACCUEIL : Date et Heure
   ========================================== */
function afficherDate() {
    const d = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    document.getElementById("msg-accueil").innerHTML = "Page consultée le : " + d.toLocaleDateString('fr-FR', options);
}

/* ==========================================
   PAGE PARCOURS : Noms des écoles
   ========================================== */
function voirNom(nom) {
    const zoneText = document.getElementById("affichage-nom");
    zoneText.style.display = "block";
    zoneText.innerHTML = "Établissement : <strong>" + nom + "</strong>";
    zoneText.style.color = "#001f3f";
    zoneText.style.padding = "10px";
    zoneText.style.border = "2px dashed #001f3f";
    zoneText.style.borderRadius = "10px";
}

/* ==========================================
   PAGE PARCOURS : Galerie Photos Stage
   ========================================== */
function changerPhotoStage(nomFichier, legende) {
    const zone = document.getElementById("zone-photo-stage");
    const image = document.getElementById("image-stage-display");
    const texte = document.getElementById("legende-photo-stage");

    zone.style.display = "block"; // Affiche le bloc de la photo
    image.src = nomFichier;       // Change l'image
    texte.innerHTML = legende;    // Change la légende sous la photo
}

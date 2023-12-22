const r = rolly({
    view: document.querySelector('.app'),
    native: true,
  });
  r.init();

  var img = document.getElementById("https://aesthetic-gallery.com/image/Beach-wallpaper-aesthetic-31.jpg"); // sélectionner l'image
var angle = 0; // définir l'angle de départ
var vitesse = 10; // définir la vitesse de rotation en degrés par seconde

function tourner() {
  angle += vitesse; // augmenter l'angle
  img.style.transform = "rotate(" + angle + "deg)"; // appliquer la rotation
}

setInterval(tourner, 1000 / 60); // appeler la fonction tourner 60 fois par seconde
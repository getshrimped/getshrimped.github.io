function animate(logo) {
  let xPos = Math.random() * (window.innerWidth - logo.clientWidth);
  let yPos = Math.random() * (window.innerHeight - logo.clientHeight);
  let xSpeed = 6 + Math.random() * 2;
  let ySpeed = 6 + Math.random() * 2;

  if (window.innerWidth <= 600) {
    xSpeed = 3 + Math.random() * 2;
    ySpeed = 3 + Math.random() * 2;
  }

  function updatePosition() {
    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos + logo.clientWidth >= window.innerWidth || xPos <= 0) {
      xSpeed = -xSpeed;
    }
    if (yPos + logo.clientHeight >= window.innerHeight || yPos <= 0) {
      ySpeed = -ySpeed;
    }

    logo.style.left = xPos + 'px';
    logo.style.top = yPos + 'px';

    requestAnimationFrame(updatePosition);
  }

  logo.style.position = 'absolute';
  logo.style.left = xPos + 'px';
  logo.style.top = yPos + 'px';

  updatePosition();
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Initial animation for existing shrimps
  const logos = document.querySelectorAll('.bouncing-logo');

  logos.forEach((logo, index) => {
    animate(logo);
  });

  var intervalId = null;
  var varCounter = 0;

  var add_shrimp = function() {
    if (varCounter <= 20) {
      varCounter += 1;

      //make the div visible here
      const shrimp = document.createElement("img");
      shrimp.setAttribute('src', 'shrimp.png');
      shrimp.setAttribute('class', 'bouncing-logo rotate');
      shrimp.setAttribute('alt', 'Shrimped');

      const container = document.getElementById("shrimps-container");
      container.appendChild(shrimp);

      animate(shrimp);
    } else {
      clearInterval(intervalId);
    }
  };

  intervalId = setInterval(add_shrimp, 1 * 1000);
});

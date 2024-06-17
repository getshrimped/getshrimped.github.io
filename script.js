document.addEventListener('DOMContentLoaded', (event) => {

  const logos = document.querySelectorAll('.bouncing-logo');

  logos.forEach((logo, index) => {
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
  });
});

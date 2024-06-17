document.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.getElementById('bouncingLogo');
    let xPos = Math.random() * (window.innerWidth - logo.clientWidth);
    let yPos = Math.random() * (window.innerHeight - logo.clientHeight);


    let xSpeed = 6;
    let ySpeed = 6;

    if (window.innerWidth <= 600) {
      xSpeed = 3;
      ySpeed = 3;
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

    updatePosition();
});

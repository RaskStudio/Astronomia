// Mars procent-stigning

window.addEventListener('DOMContentLoaded', (event) => {
    const percentageElement = document.getElementById('percentage');
    // Sætter procentn til 0
    let percentage = 0;
    // Graduerligt gør procenten højere
    const interval = setInterval(() => {
      // +1% indtil den rammer 80%
      if (percentage <= 80) {
        percentageElement.textContent = percentage + "%";
        percentage++;
      } else {
        // Stopper når den rammer 80%
        clearInterval(interval);
      }
      // Hastighed
    }, 20);
  });
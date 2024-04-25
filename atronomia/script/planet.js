// Mars procent-stigning

window.addEventListener('DOMContentLoaded', (event) => {
  const percentageElement = document.getElementById('percentage');
  // Sætter procentn til 0
  let percentage = 0;
  // Graduerligt gør procenten højere
  const interval = setInterval(() => {
    // +1% indtil den rammer 53%
    if (percentage <= 53) {
      percentageElement.textContent = percentage + "%";
      percentage++;
    } else {
      // Stopper når den rammer 53%
      clearInterval(interval);
    }
    // Hastighed
  }, 20);
});



// Jorden tal-stigning

window.addEventListener('DOMContentLoaded', (event) => {
  const numberElement = document.getElementById('number');
  // Starttal
  let number = 0;
  // Sluttal
  const targetNumber = 6.371;
  // For at få den til at ramme tallet efter 3 sekunder
  const incrementPerMillisecond = (targetNumber - number) / (3 * 1000);
  // Gradvist få tallet til at stige
  const interval = setInterval(() => {
    // Tal stiger per millisekund
    if (number < targetNumber) {
      // Opdaterer tallet
      numberElement.textContent = number.toFixed(3); // Sætter den til 3 decimaler, så er der er et punktum ved tusindtallet.
      number += incrementPerMillisecond * 20;
    } else {
      // Sikrer at tallet slutter på 6.371
      numberElement.textContent = targetNumber.toFixed(3);
      // Stopper intervallet når sluttallet rammes.
      clearInterval(interval);
    }
  }, 20); // Animationshastighed.
});


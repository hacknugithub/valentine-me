document.addEventListener('DOMContentLoaded', (event) => {
  const negation = [
    '¿Como, por?',
    'No ya enserio, ¿porque?',
    '¿Enserio? ¿Porque?',
    '¿Porque no?',
    'Estas olvidando que soy un programa, no tengo sentimientos, no puedo ser rechazado.',
    '¿Porque no? No tengo sentimientos, no puedo ser rechazado.',
    '¿Porque no? No tengo sentimientos, no puedo ser rechazado. ¿O si?',
    'Bueno ya di que si',
    'Podemos estar aqui todo el dia, pero no voy a aceptar un no por respuesta.',
  ]
  const acceptButton = document.getElementById('acceptme');
  const denyButton = document.getElementById('denytme');
  const hiddenContent = document.querySelector('.hidden');
  const textMessage = document.getElementById('text-message');
  const originalText = textMessage.textContent;

  const refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', () => {
    location.reload();
  });

  let count = 0;

  acceptButton.addEventListener('click', () => {
    hiddenContent.style.display = 'block';
    hiddenContent.style.animation = 'fadeIn 1s ease-in-out';
    hiddenContent.style.animationFillMode = 'forwards';
    refreshButton.classList.remove('hidden');
  });

  function growMe(element) {
    element.style.transform = `scale(1.${count})`;
    replaceText(textMessage);
  }

  function replaceText(element) {
    const newText = negation[Math.floor(Math.random() * negation.length)];
    element.textContent = newText;
  }

  denyButton.addEventListener('click', () => {
    if (count < 10) {
      growMe(acceptButton);
      count++;
    } else {
      count = 0;
      replaceText(originalText);
    }
  });
});
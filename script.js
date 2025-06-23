function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 4 + Math.random() * 5 + 's';
  petal.style.width = petal.style.height = 15 + Math.random() * 15 + 'px';
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.getElementById('petal-container').appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}


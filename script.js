document.getElementById('funFactButton')
.addEventListener('click', function() {
  const funFact = document.getElementById('funFact');
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
});

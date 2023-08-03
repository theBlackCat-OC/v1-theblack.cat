window.addEventListener('scroll', function() {
  const header = document.getElementById('topBar');
  const headerContent = document.querySelector('.header-content');
  const scrollAmount = window.scrollY;
  const scrollThreshold = 7; // 7vh

  if (scrollAmount >= scrollThreshold) {
    header.classList.remove('glassbox-50');
    header.classList.add('glassbox-10');
    header.style.height = '5vh';
    headerContent.style.fontSize = '74%';
  } else {
    header.classList.remove('glassbox-10');
    header.classList.add('glassbox-50');
    header.style.height = '7vh';
    headerContent.style.fontSize = '100%';
  }
});

var item = document.getElementsByTagName('MAIN')[0];

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 1000;
  else item.scrollLeft -= 1000;
});
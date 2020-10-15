buildGrid = function () {
  const gridCount = getComputedStyle(document.documentElement).getPropertyValue('--grid-count');
  const container = document.getElementById("grid");

  container.innerHTML = '';

  for (let i = 1; i <= gridCount; i++) {
    container.innerHTML += '<div>' + i + '</div>';
  }
};

window.addEventListener('resize', function() {  
 buildGrid();
});

window.addEventListener('load', function() {
  buildGrid();
  
  // grid toggler
  document.onkeydown = function(evt) {
  if (evt.ctrlKey && (evt.key === ';')) {
      var newValue = document.body.getAttribute('grid') === 'visible' ? 'invisible' : 'visible';
      document.body.setAttribute('grid', newValue);
      localStorage.setItem('grid', newValue);
    }
  };

  document.body.setAttribute('grid', localStorage.getItem('grid'));
});
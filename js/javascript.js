window.addEventListener('load', function() {
  let columns = getComputedStyle(document.documentElement).getPropertyValue('--grid-count');
  const container = document.getElementById("grid");

  
  for (let i = 1; i <= columns; i++) {
    console.log(i);
    container.innerHTML += '<div>' + i + '</div>';
  }
  
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
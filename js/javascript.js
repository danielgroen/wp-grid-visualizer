buildGrid = function () {
  const gridCount = getComputedStyle(document.documentElement).getPropertyValue('--grid-count');
  const container = document.getElementById("grid-visualizer");

  container.innerHTML = '';

  for (let i = 1; i <= gridCount; i++) {
    container.innerHTML += '<div>' + i + '</div>';
  }
};

window.addEventListener('resize', function() {  
 buildGrid();
});

window.addEventListener('load', function() {
  const gridDebugValue = getComputedStyle(document.documentElement).getPropertyValue('--grid-debug');

  if (localStorage.getItem('grid-onboarding') !== 'false') {
    document.body.setAttribute('grid-onboarding', 'true');
  }
  localStorage.setItem('grid-onboarding', false);


  buildGrid();
   
  // grid toggler
  document.onkeydown = function(evt) {
    
    document.onclick = () => { 
      if (evt.key === 'Alt') {
        
        var newValue = document.body.getAttribute('grid') === 'visible' ? 'invisible' : 'visible';
        document.body.setAttribute('grid', newValue);
        localStorage.setItem('grid', newValue);
        document.body.setAttribute('grid-onboarding', false);

        if (newValue === 'invisible') {
          document.documentElement.style.setProperty('--grid-debug', false);
        }
        else {
          document.documentElement.style.setProperty('--grid-debug', gridDebugValue);
        }
        document.onclick = null;
      }
    }

  };

  document.body.setAttribute('grid', localStorage.getItem('grid'));
});
keys = document.querySelectorAll('.key');
sounds = document.querySelectorAll('audio');

keys.forEach((key) => {
  window.addEventListener('keydown', (e) => {
  if (e.keyCode == key.getAttribute('data-key')) {
    sounds.forEach((sound) => {
    if (sound.getAttribute('data-key') == e.keyCode) sound.play();
    
    
    
    })
    }
  })
})


const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');

bgCheckbox.addEventListener('change', handleBgChanged);

 function handleBgChanged() {
  bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

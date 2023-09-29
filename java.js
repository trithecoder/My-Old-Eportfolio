let bluecolor = document.getElementById('headlinks__1');
let wavehand = document.getElementById('body-tag-h1');

function turnBlue() {
    bluecolor.style.color = '#d05025'
};

bluecolor.addEventListener('click', turnBlue)

function waveup() {
   wavehand.style.color = 'blue'
   wavehand.style.transition = '1s'
   wavehand.style.textShadow = '5px 5px 40px #1800ff'
}
function resethand() {
    wavehand.style.color = ''
    wavehand.style.textShadow = ''
}

wavehand.addEventListener('mouseover', waveup)
wavehand.addEventListener('mouseout', resethand)
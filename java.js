const headerlinks = document.getElementById('headlinks__1');
const headerlinks2 = document.getElementById('headlinks__2');
const headerlinks3 = document.getElementById('headlinks__3');
const headerlinks4 = document.getElementById('headlinks__4');
const headerlinks5 = document.getElementById('togglebut');
const headerlinks6 = document.getElementById('togglebut1');

const wavehand = document.getElementById('body-tag-h1');
const paratags = document.getElementById('both-para-tags');
const backchange = document.getElementById('body');
const buttontoggle = document.getElementById('togglebut');
const buttontogglereset = document.getElementById('togglebut1')
const projectcolor = document.getElementById('');
const mainheader = document.getElementById('headerli')
const mainbodd = document.getElementById('main-bodyid');
const linkhover = document.getElementById('linksymbol');
const linkhover2 = document.getElementById('linksymbol2')
const huddlelink = document.getElementById('huddle-link');
const netflixlink = document.getElementById('netflix-link')

function waveup() {
   wavehand.style.color = 'blue'
   wavehand.style.transition = '1s'
   wavehand.style.textShadow = '5px 5px 40px #1800ff'
}
function resethand() {
    wavehand.style.color = ''
    wavehand.style.textShadow = ''
}

function changebgcolor() {
    backchange.style.backgroundColor = 'black'
    backchange.style.transition = '1s'
    mainbodd.style.backgroundColor = ''
    mainbodd.style.color = ''
    mainheader.style.backgroundColor = ''
    headerlinks.style.color = ''
    headerlinks2.style.color = ''
    headerlinks3.style.color = ''
    headerlinks4.style.color = ''
    headerlinks5.style.color = ''
    headerlinks6.style.color = ''
}
function resetbgcolor () {
    backchange.style.backgroundColor = 'white'
    backchange.style.transition = '1s'
    mainbodd.style.backgroundColor = 'white'
    mainbodd.style.color = 'black'
    mainheader.style.backgroundColor = 'white'
    headerlinks.style.color = 'black'
    headerlinks2.style.color = 'black'
    headerlinks3.style.color = 'black'
    headerlinks4.style.color = 'black'
    headerlinks5.style.color = 'black'
    headerlinks6.style.color = 'black'
}

function linkpop() {
    huddlelink.style.opacity = '1'
    huddlelink.style.transition = '1s'
    huddlelink.style.transform = 'translateX(0)'
}

function resetlinkpop() {
    huddlelink.style.opacity = '0'
}

function linkpop2() {
    netflixlink.style.opacity = '1'
    netflixlink.style.transition = '1s'
    netflixlink.style.transform = 'translateX(0)'
}

function resetnetflixLink() {
    netflixlink.style.opacity = '0'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const lightbserver = new IntersectionObserver((switchs) => {
    switchs.forEach((switchs) => {
        console.log(switchs)
        if (switchs.isIntersecting) {
            switchs.target.classList.add('')
        } else {
            switchs.target.classList.remove('');
        }
    })
})

const lightObserver = document.querySelectorAll('.hidden');
lightObserver.forEach((el) => observer.observe(el))

wavehand.addEventListener('mouseover', waveup)
wavehand.addEventListener('mouseout', resethand)

// backchange.addEventListener('mouseover', changebgcolor)
// backchange.addEventListener('mouseout', resetbgcolor)

buttontoggle.addEventListener('click', changebgcolor)
buttontogglereset.addEventListener('click', resetbgcolor)


//HUDDLE LINK EFFECTS
linkhover.addEventListener('mouseover', linkpop)
linkhover.addEventListener('mouseout', resetlinkpop)

//NETFLIX LINK EFFECTS
linkhover2.addEventListener('mouseover', linkpop2)
linkhover2.addEventListener('mouseout', resetnetflixLink)
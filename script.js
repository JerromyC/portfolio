const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img01');
const img2 = document.getElementById('img02');
const img3 = document.getElementById('img03');
const textBox = document.getElementById('text-box');

// Images

function imageMode(color) {
    img1.src = `img/undraw_proud_coder_re_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    isLight ? imageMode(`light`) : imageMode(`dark`);
}

// Switches theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(false);
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(true);
        localStorage.setItem('theme', 'light');
    }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);

// check local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}

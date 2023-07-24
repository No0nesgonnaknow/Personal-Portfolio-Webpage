const aboutButton = document.querySelector('#about-button')
const aboutButtonContent = document.querySelector('#about-button div')

aboutButton.addEventListener('click', toggleButton)

function toggleButton() {
    aboutButtonContent.classList.toggle('loading')
}
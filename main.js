const toggle = document.querySelectorAll('.switcher .toggle')

const body = document.querySelector('body')
const circle = document.querySelector('.circle')
const morning = document.querySelector('.good-morning')
const night = document.querySelector('.good-night')


//Quando clicar nos botões, alterar o Theme
for (const element of toggle) {
  element.addEventListener('click', changeTheme)
} 

function changeTheme(){
  body.classList.toggle('light')
  circle.classList.toggle('light')
  morning.classList.toggle('light')
  night.classList.toggle('light')
  classTheme()
}


// Classificando qual o atual Theme e armazenando no localstorage
function classTheme(){
  if(body.className === ""){
    localStorage.setItem('theme', 'dark')
  } else{
    localStorage.setItem('theme', 'light')
  }
}

// Checkando qual foi o theme salvo pela última vez do usuário e aplicando na página
function checkTheme(){
  const localStorageTheme = localStorage.getItem('theme')

  if( localStorageTheme === 'light'){
    changeTheme()
  }
}

window.onload = checkTheme();
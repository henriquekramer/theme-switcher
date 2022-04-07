const body = document.querySelector('body')
const switcher = document.querySelector('.switcher')


let getMode = localStorage.getItem("theme");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

switcher.addEventListener('click', () =>{
  body.classList.toggle('dark');
  if(body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
})
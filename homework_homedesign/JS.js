const menuIcons = document.querySelector('.menu-icon')
const sideContainer = document.querySelector('.side-container')

let isMenuOpen = false;

menuIcons.addEventListener('click',()=>{
  isMenuOpen = !isMenuOpen
  isMenuOpen ? menuIcons.classList.add('open') : menuIcons.classList.remove('open')
  if(isMenuOpen){
    sideContainer.classList.remove('close')
    sideContainer.classList.add('open')
    
    
  } 
  if(!isMenuOpen ){
      sideContainer.classList.add('close')
      sideContainer.classList.remove('open')
      
    }
    
})

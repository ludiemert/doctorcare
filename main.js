//onScrool é a ação de descer e subir a barra de rolagem 
//Strig (Textos)
//Number (numeros)
//Boolean ( true | false)

//retirar o erro do console log
window.addEventListener('scroll', onScroll)

//habilita o onScroll
onScroll()
function onScroll() {
   showNavOnScroll ()
   showBackToTopButtonOnScroll()

   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(about)
   activateMenuAtCurrentSection(contact)
}   


function activateMenuAtCurrentSection(section) {
    const targetLine =scrollY + innerHeight / 2

     //O topo da seção  (ou home.offsetTop)
    const sectionTop = section.offsetTop

    //a altura da seção 
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informações dos dados e da lógica 
    console.log('O topo da seção chegou ou passou da linha alvo?', sectionTopReachOrPassedTargetline
    )

     //a seção termina onde?
     const sectionEndsAt = sectionTop + sectionHeight

     //nome da variavel
     //o final da seção passou da linha alvo
     const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

     console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    //limites da seção 
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetline && 
    !sectionEndPassedTargetLine
    //! quer dizer NAO (!) esta negando 

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
   
    menuElement.classList.remove('active')
    
    //se eu estiver nos limites da seção 
    if (sectionBoundaries) {
       menuElement.classList.add('active')
    }   
}

function showNavOnScroll(){
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    } 
}

function showBackToTopButtonOnScroll (){
    
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    } 
}


//função de chamar o menu

function openMenu () {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//criando um objeto no JS
ScrollReveal({ 
    origin: 'top',
    distance: '30px',
    duration: 700 
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content`)


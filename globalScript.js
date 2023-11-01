// NAVEGAR PARA PÁGINA ESPECÍFICA

function NavigateToScreen(link) {
    window.location.href = link
}


// MUDANÇA DE BACKGROUND DA HEADER
const header = document.querySelector('header')
const easyAccess = document.querySelector('body > div.easyAccess')

document.body.onscroll = () => {

    try {
        if (document.documentElement.scrollTop > 100) {
            header.classList.add('scrolled')
            goToTop.classList.remove('hidden')
            easyAccess.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
            goToTop.classList.add('hidden')
            easyAccess.classList.remove('scrolled')
        }
    } catch {}
    
}


// MENU E BOTÃO DE ACESSO AO MENU: PASSAR O MOUSE EM CIMA E MOSTRAR/ESCONDER MENU

const menu = document.getElementById('menu')
const menuAccess = document.getElementById('menuAccess')
const expandedMenuItem = document.querySelector("#menu > section")

menuAccess.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        document.body.classList.add("blockScroll")
    } else {
        menu.classList.add('hidden');
        expandedMenuItem.classList.add("closed")
        document.body.classList.remove("blockScroll")
    }
}

const menuItems = document.querySelectorAll("#menu > section > ul")
function toggleItem(element) {
    expandedMenuItem.classList.remove("closed")

    for (let index = 0; index < menuItems.length; index++) {
        menuItems[index].style.display = "none"
    }

    document.querySelector("#menu > section > p").innerText = element
    document.querySelector(`#menu > section > ul.${element}`).style.display = "flex"
}



// BOTÃO DE IR PARA O TOPO DA PÁGINA

const goToTop = document.getElementById('goToTop');
goToTop.addEventListener('click', scrollToTop);
  
function scrollToTop() {
    window.scrollTo({ top: 0 })
}


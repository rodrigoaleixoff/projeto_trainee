function menuMobile() {
    let menu = document.querySelector('.mobile-menu');
    let fundo = document.querySelector('.fundo-mobile')

    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        fundo.classList.add('fundo')
    } else {
        menu.classList.add('open')
        fundo.classList.remove('fundo')
    }
}
let btn = document.getElementsByClassName('btn-modal')
let closeModal = document.querySelector('.close-modal')
let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')
let body = document.getElementsByTagName('body')
console.log(btn)

for (let index = 0; index < btn.length; index++) {
    function showModal(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        console.log('Am a Modal')
    }
    btn[index].addEventListener('click', showModal)
}

function hideModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function keyBoardEvt(e){
    if (e.key === "Escape") {
        hideModal()
    }
}

closeModal.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)
document.addEventListener('keyup', keyBoardEvt)

var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggLeModal(e){
    
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggLeModal)

btnClose.addEventListener('click',toggLeModal)

iconClose.addEventListener('click',toggLeModal)

modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggLeModal()
    }
})




const refs = {
    modalEnglish: document.querySelector('.modalEnglish'),
    modalEnglishBackdrop: document.querySelector('.modalEnglish__Backdrop'),
    modalEnglishCloseBtn: document.querySelector('.modalEnglish__CloseBtn'),
    modalEnglishOpenBtn: document.querySelector('.modalEnglish__OpenBtn'),  
    modalEnglishLeftBtn: document.querySelector('.modalEnglish__LeftBtn'),  
    modalEnglishRightBtn: document.querySelector('.modalEnglish__RightBtn'), 
    certificatesList: document.querySelector('.certificatesList'), 
  };

var showModalEnglish = gsap.timeline();
showModalEnglish.pause();
showModalEnglish.to(refs.modalEnglishBackdrop, 0.6, { y: '-100%'});
showModalEnglish.to(refs.modalEnglish, 0.6, { scale: 1, x:'-50%', y:'-50%'});

var changeCerificates = gsap.timeline();
changeCerificates.pause();
changeCerificates.to(refs.certificatesList, 0.6, { x: '-33.33%'});
changeCerificates.addPause();
changeCerificates.to(refs.certificatesList, 0.6, { x: '-66.66%'});

refs.modalEnglishOpenBtn.addEventListener('click', onModalEnglishOpenBtnClick)

function onModalEnglishOpenBtnClick() {
    showModalEnglish.play();
    refs.modalEnglishCloseBtn.addEventListener('click', onModalEnglishCloseBtnClick)
    refs.modalEnglishBackdrop.addEventListener('click', onModalEnglishBackdropClick)
    refs.modalEnglishLeftBtn.addEventListener('click', onModalEnglishLeftBtnClick)
    refs.modalEnglishRightBtn.addEventListener('click', onModalEnglishRightBtnClick)
    window.addEventListener('keydown', onKeydown)
}
function onModalEnglishCloseBtnClick() {
    showModalEnglish.reverse();
}
function onModalEnglishBackdropClick(event) {
    if (!event.target.classList.contains('modalEnglish__Backdrop')) { return }
    showModalEnglish.reverse();
  }
function onModalEnglishLeftBtnClick() {
    changeCerificates.reverse();
}
function onModalEnglishRightBtnClick() {
    changeCerificates.play();
}
function onKeydown(event) {
  if (event.code === 'ArrowRight') {
    onArrowRightKeydown()
  }
  if (event.code === 'ArrowLeft') {
    onArrowLeftKeydown()
  }
}
function onArrowLeftKeydown() {
    changeCerificates.reverse();
  }
function onArrowRightKeydown() {
    changeCerificates.play();
}

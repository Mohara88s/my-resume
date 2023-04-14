let slidesQuantity = 3;
let actualSlide = 1;
let previousSlide = slidesQuantity;
let isSlideAnimating = false;

const refs = {
  modalEnglish: document.querySelector('.modalEnglish'),
  modalEnglishBackdrop: document.querySelector('.modalEnglish__Backdrop'),
  modalEnglishCloseBtn: document.querySelector('.modalEnglish__CloseBtn'),
  modalEnglishOpenBtn: document.querySelector('.modalEnglish__OpenBtn'),
  modalEnglishLeftBtn: document.querySelector('.modalEnglish__LeftBtn'),
  modalEnglishRightBtn: document.querySelector('.modalEnglish__RightBtn'),
  certificatesList: document.querySelector('.certificatesList'),
  modal: document.querySelector('.modalPDFdownload'),
  modalBackdrop: document.querySelector('.modalPDFdownload__Backdrop'),
  modalCloseBtn: document.querySelector('.modalPDFdownload__CloseBtn'),
  modalOpenBtn: document.querySelector('.modalPDFdownload__OpenBtn'),
};
// modalEnglish
var showModalEnglish = gsap.timeline();
showModalEnglish
  .pause()
  .to(refs.modalEnglishBackdrop, 1, { y: '-100%' })
  .fromTo(
    refs.modalEnglish,
    { x: '-50%', y: '0' },
    { duration: 1, x: '-50%', y: '-100%' },
    '-=0.5',
  );

refs.modalEnglishOpenBtn.addEventListener('click', onModalEnglishOpenBtnClick);

function onModalEnglishOpenBtnClick() {
  firstSlidePosition();
  showModalEnglish.play();
  refs.modalEnglishCloseBtn.addEventListener(
    'click',
    onModalEnglishCloseBtnClick,
  );
  refs.modalEnglishBackdrop.addEventListener(
    'click',
    onModalEnglishBackdropClick,
  );
  refs.modalEnglishLeftBtn.addEventListener(
    'click',
    onModalEnglishLeftBtnClick,
  );
  refs.modalEnglishRightBtn.addEventListener(
    'click',
    onModalEnglishRightBtnClick,
  );
  window.addEventListener('keydown', onKeydown);
}
function onModalEnglishCloseBtnClick() {
  showModalEnglish.reverse();
}
function onModalEnglishBackdropClick(event) {
  if (!event.target.classList.contains('modalEnglish__Backdrop')) {
    return;
  }
  showModalEnglish.reverse();
}
function onModalEnglishLeftBtnClick() {
  changeSlideLeft();
}
function onModalEnglishRightBtnClick() {
  changeSlideRight();
}
function onKeydown(event) {
  if (event.code === 'Escape') {
    showModalEnglish.reverse();
    showModal.reverse();
  }
  if (event.code === 'ArrowRight') {
    onArrowRightKeydown();
  }
  if (event.code === 'ArrowLeft') {
    onArrowLeftKeydown();
  }
}
function onArrowLeftKeydown() {
  changeSlideLeft();
}
function onArrowRightKeydown() {
  changeSlideRight();
}

function changeSlideRight() {
  if (isSlideAnimating) {
    return;
  }
  isSlideAnimating = true;
  actualSlide++;
  if (actualSlide <= slidesQuantity) {
    previousSlide = actualSlide - 1;
  } else {
    actualSlide = 1;
    previousSlide = slidesQuantity;
  }
  animatingSlideRight();
}

function changeSlideLeft() {
  if (isSlideAnimating) {
    return;
  }
  isSlideAnimating = true;
  actualSlide--;
  if (actualSlide === 0) {
    actualSlide = slidesQuantity;
    previousSlide = 1;
  } else {
    previousSlide = actualSlide + 1;
  }
  animatingSlideLeft();
}

function firstSlidePosition() {
  let actualSlideObject = document.querySelector(
    `.certificatesList__item-${actualSlide}`,
  );
  var slideAnimation = gsap.timeline();
  slideAnimation.fromTo(
    actualSlideObject,
    { x: '0' },
    { duration: 0, x: '-100%' },
  );
}

function animatingSlideRight() {
  let actualSlideObject = document.querySelector(
    `.certificatesList__item-${actualSlide}`,
  );
  let previousSlideObject = document.querySelector(
    `.certificatesList__item-${previousSlide}`,
  );

  var slideAnimation = gsap.timeline();
  slideAnimation
    .fromTo(actualSlideObject, { x: '0' }, { duration: 1, x: '-100%' })
    .fromTo(
      previousSlideObject,
      { x: '-100%' },
      { duration: 1, x: '-200%' },
      '-=1',
    )
    .call(() => {
      isSlideAnimating = false;
    });
}

function animatingSlideLeft() {
  let actualSlideObject = document.querySelector(
    `.certificatesList__item-${actualSlide}`,
  );
  let previousSlideObject = document.querySelector(
    `.certificatesList__item-${previousSlide}`,
  );

  var slideAnimation = gsap.timeline();
  slideAnimation
    .fromTo(actualSlideObject, { x: '-200%' }, { duration: 1, x: '-100%' })
    .fromTo(previousSlideObject, { x: '-100%' }, { duration: 1, x: '0' }, '-=1')
    .call(() => {
      isSlideAnimating = false;
    });
}

// modalPDFdownload
var showModal = gsap.timeline();
showModal
  .pause()
  .to(refs.modalBackdrop, 1, { y: '+100%' })
  .fromTo(
    refs.modal,
    { x: '-50%', y: '-50%' },
    { duration: 1, x: '-50%', y: '+50%' },
    '-=0.5',
  );

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);

function onModalOpenBtnClick() {
  showModal.play();
  refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
  refs.modalBackdrop.addEventListener('click', onModalBackdropClick);
  window.addEventListener('keydown', onKeydown);
}
function onModalCloseBtnClick() {
  showModal.reverse();
}
function onModalBackdropClick(event) {
  if (!event.target.classList.contains('modalPDFdownload__Backdrop')) {
    return;
  }
  showModal.reverse();
}

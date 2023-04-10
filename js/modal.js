(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modalBackdrop: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.modalBackdrop.addEventListener('click', modalBackdropClick);

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modalBackdrop.classList.toggle('is-hidden');
    }
    function modalBackdropClick(event) {
        if (!event.target.classList.contains('backdrop')) { return }
        toggleModal()
      }
  })();
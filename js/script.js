'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // * Switch tabs
  const servicesColumn = document.querySelectorAll('.services__item');
  const getInTouch = document.querySelectorAll('.getintouch__item');
  const serviceHover = 'item-service--green';
  const getInTouchHover = 'item-getintouch--active';

  function hideBackgroundTab(block, activeStyle) {
    block.forEach((tab) => {
      tab.classList.remove(activeStyle);
    });
  }

  function showBackgroundTab(block, activeStyle) {
    block.classList.add(activeStyle);
  }

  function switchTabs(block, activeStyle) {
    block.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        hideBackgroundTab(block, activeStyle);
        showBackgroundTab(block[index], activeStyle);
      });
    });
  }
  switchTabs(servicesColumn, serviceHover);
  switchTabs(getInTouch, getInTouchHover);

  // * Modal window
  const contact = document.querySelectorAll('[data-contact]');
  const modalWindow = document.querySelector('.modal');
  const closeModalWindow = document.querySelector('[data-close]');

  function openModal() {
    modalWindow.classList.remove('modal_hide');
    modalWindow.classList.add('modal_show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalWindow.classList.remove('modal_show');
    modalWindow.classList.add('modal_hide');
    document.body.style.overflow = '';
  }

  contact.forEach((link) => {
    link.addEventListener('click', openModal);
  });

  closeModalWindow.addEventListener('click', closeModal);

  // * Scroll open modal window
  function showMOdalScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showMOdalScroll);
    }
  }
  // window.addEventListener('scroll', showMOdalScroll);

  // * Scroll scale

  // scale.style.width = '100%';
  // document.querySelector('.scale').style.width = '100%';

  function scaleAnimation() {
    const scale = document.querySelector('.scale');
    const id = setInterval(scaleFrame, 10);
    function scaleFrame() {
      if (
        Math.trunc(
          (window.pageYOffset + document.documentElement.clientHeight) / document.documentElement.scrollHeight
        ) == 1
      ) {
        clearInterval(id);
        console.log('timer stop');
      } else {
        scale.style.width =
          ((window.pageYOffset + document.documentElement.clientHeight) / document.documentElement.scrollHeight) * 100 +
          '%';
      }
    }
  }
  window.addEventListener('scroll', scaleAnimation);
});

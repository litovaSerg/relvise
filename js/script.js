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
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showMOdalScroll);
    }
  }
  // window.addEventListener('scroll', showMOdalScroll);

  // * Scroll scale
  const scale = document.querySelector('.scale');

  function getPercent() {
    // let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winScroll = window.scrollY;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scale.style.width = `${scrolled}%`;
    return scrolled;
  }
  getPercent();

  function scaleAnimation() {
    const timerId = setInterval(scaleFrame, 200);
    function scaleFrame() {
      if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        clearInterval(timerId);
      } else {
        getPercent();
      }
    }
  }

  window.addEventListener('scroll', scaleAnimation);
});

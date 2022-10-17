'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const servicesColumn = document.querySelectorAll('.services__item');
  const getInTouch = document.querySelectorAll('.getintouch__item');
  const serviceHover = 'item-service--green';
  const getInTouchHover = 'item-getintouch--active';
  console.log(getInTouch);

  function hideBackgroundTab(block, activeStyle) {
    block.forEach((tab) => {
      tab.classList.remove(activeStyle);
    });
  }

  function showBackgroundTab() {
    servicesColumn.forEach((tab) => {
      tab.classList.add(serviceHover);
    });
  }

  servicesColumn.forEach((tabs, index) => {
    tabs.addEventListener('click', () => {
      hideBackgroundTab(servicesColumn, serviceHover);
      servicesColumn[index].classList.add(serviceHover);
    });
  });

  getInTouch.forEach((tabs, index) => {
    tabs.addEventListener('click', () => {
      hideBackgroundTab(getInTouch, getInTouchHover);
      getInTouch[index].classList.add(getInTouchHover);
    });
  });
});

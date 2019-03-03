const triggerButton = document.getElementsByClassName('trigger');
const navMenu = document.getElementsByClassName('gnav');
const menuList = document.getElementsByClassName('gnav-list-item');

function changeState(obj,state) {
  obj.classList.toggle(state);
};

triggerButton[0].addEventListener('click', function() {
  changeState(triggerButton[0],'is-open');
  changeState(navMenu[0],'is-open');

  let menuNumber = 0;
  const menuActive = function(){
    changeState(menuList[menuNumber],'is-active'),
    menuNumber++;
    var changeMenuState = setTimeout(menuActive, 40);
    if(menuNumber > 4) {
      clearTimeout(changeMenuState);
    }
  }
  menuActive();

}, false);
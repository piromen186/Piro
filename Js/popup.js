let loginButton = document.querySelector(`.login-button`);
let loginPopUp = document.querySelector(`.login-popup`);

loginButton.addEventListener(`click`, showPopUP);

function showPopUP(evt) {

evt.preventDefault();

loginPopUp.classList.toggle(`show-popup`);

};
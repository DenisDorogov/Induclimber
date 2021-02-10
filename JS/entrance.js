const MAIN_BUTTONS_DEFAULT = {
    buttonTopFloor: ['button-top-flour', 5, 'Последний этаж'],
    buttonCountAppartments: ['button-count-appartments', 4, 'Количество на этаже'],
    buttonLastAppartment: ['button-last-appartment', undefined, 'Последняя квартира'],
    buttonFirstAppartment: ['button-first-appartment', undefined, 'Первая квартира'],
};
const LOCAL_STORAGE_LENGTH = 4;


// var modal = document.querySelector("#modal"),
// modalOverlay = document.querySelector("#modal-overlay"),
// closeButton = document.querySelector("#close-button"),
// openButton = document.querySelector("#button1");
// // console.log(closeButton);
// closeButton.addEventListener("click", function() {
// modal.classList.toggle("closed");
// modalOverlay.classList.toggle("closed");
// });

// openButton.addEventListener("click", function() {
// modal.classList.toggle("closed");
// modalOverlay.classList.toggle("closed");
// });



let button = new MainButtons();
let data = new SavedData();

// console.log(button.parent);
// button.parent.addEventListener('click', event => console.log(event.target.id));
// button.outputButton('button-count-appartments', 7);
// document.getElementById('block-params-up').addEventListener('click', event => console.log(event,target))
// button.parent.addEventListener('click', event => button.changeCurrentButton(event.target.id, 22));
button.outputButtons();
const MAIN_BUTTONS_DEFAULT = {
    buttonTopFloor: ['button-top-flour', 5, 'Последний этаж', 40],
    buttonCountAppartments: ['button-count-appartments', 4, 'Количество на этаже', 12],
    buttonLastAppartment: ['button-last-appartment', undefined, 'Последняя квартира', 1000],
    buttonFirstAppartment: ['button-first-appartment', undefined, 'Первая квартира', 999],
};
const LOCAL_STORAGE_LENGTH = 4;

let button = new MainButtons();
let data = new SavedData();
button.outputButtons();
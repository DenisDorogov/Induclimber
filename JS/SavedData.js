class SavedData {
    buttons = {};

    constructor() {
        if (localStorage.length < LOCAL_STORAGE_LENGTH) {
            for (let key in MAIN_BUTTONS_DEFAULT) {
                this.setStorage(key, MAIN_BUTTONS_DEFAULT[key][1]); 
            }
        }
        this.setButtons();
    }

    setButtons() {
        for (let key in MAIN_BUTTONS_DEFAULT) { 
            this.buttons[key] = [
                MAIN_BUTTONS_DEFAULT[key][0],
                this.getStorage(key),
                MAIN_BUTTONS_DEFAULT[key][2]
            ]
        }
    }

    setStorage(key, value) {
        localStorage.setItem(key, value);
    }
      
    getStorage(key) {
        let value = localStorage.getItem(key);
        if (value == "undefined") {
            return undefined;
        } else {
            return value;
        }
    }

    getButtonValue(id)  {
        for (let key in this.buttons) {
            if (id == this.buttons[key][0]) return this.buttons[key][1];
        }
        return alert('Ошибка getButtonValue id = ' , id);
    }
}
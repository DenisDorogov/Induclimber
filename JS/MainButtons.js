class MainButtons {
    parent;
    buttonsObj;
    modal;
    apartments;

    constructor() {
        this.parent = document.getElementById('block-params-up');
        this.buttonsObj = new SavedData();
        this.apartments = new Apartments(this.buttonsObj.buttons);
        this.apartments.outputList();
        this.modal = new ModalInput();
        this.parent.addEventListener('click', event => {
            let value = this.buttonsObj.getButtonValue(event.target.id);
            this.modal.modalOn(event.target.id, value);
        });    
    }

    updateInstance() {
        this.apartments = new Apartments(this.buttonsObj.buttons);
    }

    changeCurrentButton(id, value = undefined) {
        for (let key in this.buttonsObj.buttons) {
            if (this.buttonsObj.buttons[key][0] == id) {
                if (value > this.buttonsObj.buttons[key][3]) {
                    console.log('Error. Value is must from 0 to ', this.buttonsObj.buttons[key][3]);
                    value = this.buttonsObj.buttons[key][3];
                }
                this.buttonsObj.buttons[key][1] = value;
                this.buttonsObj.setStorage(key, value); 
                break;
            }
        }
        this.outputButton(id, value); 
        this.apartments = new Apartments(this.buttonsObj.buttons);
        this.apartments.outputList();
    }

    outputButton(id, value) {
        let button = document.getElementById(id);
        if (value == undefined) button.innerHTML = '';
        else button.innerHTML = value;
    }

    outputButtons() {
        for (let key in this.buttonsObj.buttons) {
            let button = document.createElement('button');
            button.className = 'button-count';
            button.id = this.buttonsObj.buttons[key][0];
            
            if (this.buttonsObj.buttons[key][1] != undefined) {
                button.innerHTML = this.buttonsObj.buttons[key][1];
            } else {
                button.innerHTML = '';
            }
            this.parent.appendChild(button);
        }
    }
}

class ModalInput {
    value;
    modal;
    modalOverlay;
    closeButton;
    defaultField;
    idButton;

    constructor(value) {
        this.modal = document.querySelector("#modal");
        this.modalOverlay = document.querySelector("#modal-overlay");
        this.closeButton = document.querySelector("#close-button");
        this.modal.addEventListener('click', event => this.clickReaction(event.target.id));
    }

    modalOn(id, value) {
        console.log('id = ', id);
        this.idButton = id;
        this.modalField = document.querySelector('#entering-number');
        if (value == undefined || value == 0) {
            this.modalField.innerHTML = '';
        } else {
            this.modalField.innerHTML = value;
        }
        this.defaultField = true;
        this.modal.classList.toggle("closed");
        this.modalOverlay.classList.toggle("closed");
    }

    modalOff() {
            this.value = undefined;
            this.modalOverlay.classList.toggle("closed");
            this.modal.classList.toggle("closed");
    }

    valueInput() {
        if ( Number(this.value) == 0 ) this.value = undefined;
        button.changeCurrentButton(this.idButton, this.value);
    }

    clickReaction(id) {
        switch (id) {
        case 'close-button': 
            this.modalOff();
            break;
        case 'button-enter':
            this.valueInput();
            this.modalOff();
            break;
        case 'button1':
            this.fieldContent(1);
            break;
        case 'button2':
            this.fieldContent(2);
            break;
        case 'button3':
            this.fieldContent(3);
            break;
        case 'button4':
            this.fieldContent(4);
            break;
        case 'button5':
            this.fieldContent(5);
            break;
        case 'button6':
            this.fieldContent(6);
            break;
        case 'button7':
            this.fieldContent(7);
            break;
        case 'button8':
            this.fieldContent(8);
            break;
        case 'button9':
            this.fieldContent(9);
            break;
        case 'button0':
            this.fieldContent(0);
            break;
        }
    }
    
    fieldContent(num) {
        if (this.defaultField == true) {
            this.modalField.innerHTML = '' + num;
            this.value = '' + num;
            this.defaultField = false;
        } else {
            this.value = this.value + num;
            this.modalField.innerHTML = this.value;
        }
        
    }





}
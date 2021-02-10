class Apartments {
    topFloor;
    countApartmentOnFloor;
    lastApartment;
    firstApartment;

    constructor(object) {
        this.topFloor = object.buttonTopFloor[1];
        this.countApartmentOnFloor = object.buttonCountAppartments[1];
        this.lastApartment = object.buttonLastAppartment[1];
        this.firstApartment = object.buttonFirstAppartment[1];
    }

    getList(count) {
        let list = [];
        let last = count;
        let first = this.firstApartment;

        for (let i = 0; i < count; i++ ) {
            first <= 0 ? list.push('  ') : list.push(first);
            first++;
        }
        console.log(list);
        return list;
    }

    getCountApartments() {
        if (this.lastApartment == undefined || this.lastApartment == null ) {
            this.lastApartment = this.topFloor * this.countApartmentOnFloor;
        };

        if(this.firstApartment == undefined || this.firstApartment == null) {
            this.firstApartment = this.lastApartment - this.topFloor * this.countApartmentOnFloor + 1;
        }
        return this.lastApartment - this.firstApartment + 1;
    }

    outputList() {
        let list = this.getList(this.getCountApartments());
        let stop = list.length;
        let putIn;

        this.element = document.getElementById('block-output-table');
        this.element.innerHTML = '';
        for (let i = this.topFloor ; i > 0; i--) {
            putIn = document.createElement('p');
            putIn.className = "output-floor output-number";
            putIn.innerHTML = i;
            this.element.appendChild(putIn);

            let divElement = document.createElement('div');
            // divElement.innerHTML = '';
            divElement.className = 'floor-block';
            for (let j = 0 ; j < this.countApartmentOnFloor; j++) {
                putIn = document.createElement('p');
                putIn.className = "output-number";
                if (list.length == 0) {
                    break;
                } else {
                putIn.innerHTML = list.pop();
                divElement.appendChild(putIn);
                }
            }
            this.element.appendChild(divElement);
        }
    }


}
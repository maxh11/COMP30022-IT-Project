import React from 'react';
import ReactDOM from 'react-dom';

class Car {
    constructor(name) {
        this.brand = name;
    }
    present = () => 'I have a ' + this.brand;
}
var mycar = new Car("Tesla");

const myfirstelement = <h1>{mycar.present()}</h1>
ReactDOM.render(myfirstelement, document.getElementById('root'));

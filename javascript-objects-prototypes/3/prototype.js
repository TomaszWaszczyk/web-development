/**
 * Created by zwstwyk on 2017-06-28.
 */

'use strict';

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat("Fluffy", "White");
var muffin = new Cat('Muffin', 'Brown');

//fluffy.age = 100;

//display(fluffy.age);
document.write(fluffy.age);
document.write(fluffy.__proto__.age);

document.write(Object.keys(fluffy));

document.write(fluffy.hasOwnProperty('age'));





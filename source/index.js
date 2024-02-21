'use strict';

function MyArrayProto() {
    this.reduceRight = function (callback, accumulator) {
        let result;
        if (accumulator) {
            result = accumulator;
            for (let i = this.length-1; i >= 0; i--) {
                result = callback(result, this[i], this, i);
            }
        } else {
            result = this[this.length-1];
            for (let i = this.length-1; i>=1; i--) {
                result = callback(result, this[i-1], this, i)
            }
        }
        return result;
    }
}

function MyArray(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
        this[this.length++] = arguments[i]
    }
}

MyArray.prototype = new MyArrayProto();

const numbers = new MyArray(1,2,3,4,5);
const reducedNumbers = numbers.reduceRight(
    function (pV, cV) {
        return pV + cV;
    },
);

console.log(reducedNumbers);
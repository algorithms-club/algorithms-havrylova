'use strict';


class Sort {
	isSorted(array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                return false;
            }
        }
        return true;
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    selectionSort(array) {
        for (let i = 0; i < array.length; i++) {
            let mark = array[i];
            let key = i;
            for (let j = i+1; j < array.length; j++) {
                if (mark > array[j]) {
                    mark = array[j];
                    key = j;
                }
            }

            let tmp = array[i];
            array[i] = mark;
            array[key] = tmp;
        }

        return array;
    }
    // let arr = [12, 8, 14, 6, 4, 9, 1, 8, 13, 5, 11, 3, 18, 3, 10, 9];
    shellSort(arr){
        let len  = arr.length;
        let gapSize =  Math.floor(len/2);

        while(gapSize > 0) {
            for(let i = gapSize; i < len; i++) {
                let temp = arr[i];
                let j = i;
                while(j >= gapSize && arr[j - gapSize] > temp) {
                    arr[j] = arr[j - gapSize];
                    j -= gapSize;
                }
                arr[j] = temp;
            }
            gapSize = Math.floor(gapSize/2);
        }
        return arr;
    }
}

module.exports = Sort;

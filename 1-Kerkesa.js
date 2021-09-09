
var array = [0, 2, 5, 4, 1, 0, 3, 3, 6, 7] ;

function dyfisho(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
        if (i>0 && array[i-1]==array[i+1]){
            array[i+1] = 0;
        }
    }

    let curIndex = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {

        if(array[i]!=0){
            array[curIndex] = array[i];
             curIndex--;
        }
    }

    while (curIndex >= 0) {
        array[curIndex] = 0;
        curIndex--;
    }
    return array;

}

console.log(dyfisho(array));

var array = [2,4,4,5,2,3,3,4,5,6,6,6,1]

function most(array){

    if(array.length == 0)
        return null;
    var mostMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if(mostMap[el] == null)
            mostMap[el] = 1;
        else
            mostMap[el]++;  
        if(mostMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = mostMap[el];
        }
    }
    return maxEl;
}

console.log("Elementi qe shfaqet me shume here eshte: " +most(array));
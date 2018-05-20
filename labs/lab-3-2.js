
function compare(x) {
    return function(y){
        if (x < y) {
            return true;
        } else if(x > y) {
            return false;
        } else {
            return null;
        }
    }
}

// var c = compare(10);
//
// console.log(c(10));
// console.log(c(15));
// console.log(c(1));
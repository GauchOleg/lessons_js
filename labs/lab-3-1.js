/**
 * Created by developer-pc on 17.05.2018.
 */

function power(num1, num2) {
    var result = 1;
    for (var count = 0; count < num2; count++) {
        result *= num1;
    }
    return result;
}

// console.log(power(2,10));
// console.log(power(3,3));
// console.log(power(2,5));
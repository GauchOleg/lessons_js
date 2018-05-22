var a = [5,12];
var b = [];
    a[99] = 7;

for (var i in a) {
    b.push(Math.pow(a[i],2));
}

// console.log(b);
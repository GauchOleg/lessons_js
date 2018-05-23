var s = "Мы знаем, что монохромный цвет - это градиент серого";
var txt = "хром";
var word = "";
var start = s.indexOf(txt);
var end = txt.length;
var word = s.slice(start, start + end);

console.log(word);
// console.log(end);

var pos = s.indexOf(txt);
var start1 = s.lastIndexOf(" ", pos) + 1;
var end2 = s.indexOf(" ", pos);
var word2 = s.slice(start1, end2);

console.log(word2);
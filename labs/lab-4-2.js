
var show = function show(){
    console.log('title : ' + this.title + ", price : " + this.price);
};

var book1 = {};

    book1.title = "title";
    book1.pubYear = 2018;
    book1.price = 2.89;
    book1.show = show;

var book2 = {
    "title" : "New Book",
    "pubYear" : 2017,
    "price" : 8.88,
    show : show,
};

book1.show();
book2.show();
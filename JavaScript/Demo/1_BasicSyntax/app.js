(function init() {

    //variable declaration

    var myInt = 5;
    var myString = 'Hello';
    var myDate = new Date(2015, 6, 24);

    //hoisting

    x = 'Hello';
    document.writeln(x);

    var x;

    //this wont work
    var a = "peas";

    document.writeln(a + ' and ' + b);

    var b = 'carrots';
})();
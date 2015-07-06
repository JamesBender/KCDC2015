(function init() {

    //function declarations

//    foo();
    //bar();

    function foo(){
        alert('foo');
    };

    var bar = function(){
        alert('bar');
    };

//    bar();


    //argument list and the arguments array
    function tooFew(a, b, c, d) {
        var message = "a: " + a + "\r\n";
        message += "b: " + b + "\r\n";
        message += "c: " + c + "\r\n";
        message += "d: " + d + "\r\n";
        alert(message);
    }

    function tooMany(a) {
        var message = "a: " + a + "\r\n\r\n";
        message += "from arguments\r\n";
        message += "0: " + arguments[0] + "\r\n";
        message += "1: " + arguments[1] + "\r\n";
        alert(message)
    }

    tooFew(1, "a parameter!");
    tooMany(1, "a parameter!");


    //Functions as values
    var englishGreeting = function(name) {
        return "Hi " + name + "!";
    };

    var frenchGreeting = function(name) {
        return "Bonjour " + name + "!";
    };

    var spanishGreeting = function(name){
        return "Hola " + name + "!";
    }

    function sayHello(name, typeOfGreeting){
        var greeting = typeOfGreeting(name);
//        document.writeln(greeting + '<br/>');
    };

    sayHello('James', englishGreeting);
    sayHello('James', frenchGreeting);
    sayHello('James', spanishGreeting);
})();
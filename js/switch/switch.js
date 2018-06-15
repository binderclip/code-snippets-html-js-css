var foo = {"type": "FOO", "foo": "foooo"};
var bar = {"type": "BAR", "bar": "baaar"};

function printData(obj) {
    switch (obj.type) {
        case "FOO":
            console.log("FOO: " + obj.foo);
            break;
        case "BAR":
            console.log("BAR: " + obj.bar);
            break;
    }
}

printData(foo);
printData(bar);

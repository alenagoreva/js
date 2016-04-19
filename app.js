/**
 * Created by Administrator on 10.04.2016.
 */
var counter = 0;
function display(text) {
    console.log(text);
    counter = counter + 1;
}
function clunk(times) {
    for (var i = 0; i < times; i++) {
        display("sdfghjkkkkkkk");
    }
}

function magic(n) {
    if (n == 0) {
        display("jhjg");
    } else if (n == 1) {
        display("nm,");
    } else {
        var r = 1;
        while (n > 1) {
            r = r * n;
            n = n - 1;
        }

        clunk(r);

    }
}
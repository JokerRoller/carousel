var picture1 = document.getElementById('pic1');
var picture2 = document.getElementById('pic2');
var picture3 = document.getElementById('pic3');
var button3 = document.getElementById('b3')
var button2 = document.getElementById('b2')
var button1 = document.getElementById('b1')
var test2 = [button1, button2, button3]
var test = [picture1, picture2, picture3];
var value = 1
var i = 0;



function right() {
    if ( i + value > 2) {
        i = -1
        test[2].classList.remove('active')
    }
    i = i + value
    test[i].classList.add('active')
    test[i-value].classList.remove('active')
}
function left() {
    if ( i - value < 0) {
        i = 3
        test[0].classList.remove('active')
    }
    i = i - value
    test[i].classList.add('active')
    test[i+value].classList.remove('active')

}
function pic1() {
    i = 0
    test2[0].classList.add('active2')
    test2[1].classList.remove('active2')
    test2[2].classList.remove('active2')
    test[i].classList.add('active')
    test[1].classList.remove('active')
    test[2].classList.remove('active')
}
function pic2() {
    i = 1
    test2[1].classList.add('active2')
    test2[2].classList.remove('active2')
    test2[0].classList.remove('active2')
    test[i].classList.add('active')
    test[2].classList.remove('active')
    test[0].classList.remove('active')
}
function pic3() {
    i = 2
    test2[2].classList.add('active2')
    test2[0].classList.remove('active2')
    test2[1].classList.remove('active2')
    test[i].classList.add('active')
    test[0].classList.remove('active')
    test[1].classList.remove('active')
}
function first() {
    test[i].classList.add('active')
};
first()
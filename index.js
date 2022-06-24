var picture1 = document.getElementById('pic1');
var picture2 = document.getElementById('pic2');
var picture3 = document.getElementById('pic3');
var test = [picture1, picture2, picture3];
var value = 1
var i = 2;



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

function first() {
    test[i].classList.add('active')
};
first()
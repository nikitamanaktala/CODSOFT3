function Solve(val) {
    var v = document.querySelector(".result");
    v.value += val;
}
function Result() {
    var num1 = document.querySelector(".result").value
    var num2 = eval(num1);
    document.querySelector(".result").value = num2;
}
function Clear() {
    var inp = document.querySelector(".result")
    inp.value = '';
}
function Back() {
    var ev = document.querySelector(".result")
    ev.value = av.value.slice(0, -1);
}
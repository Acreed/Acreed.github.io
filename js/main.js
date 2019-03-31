
var cost = 0;
var cost2 = 0;
var fincost = 0;
var count = 0;
var count2 = 0;
document.getElementById("count").innerHTML = count;
document.getElementById("count2").innerHTML = count2;
document.getElementById("cost").innerHTML = cost;
document.getElementById("cost2").innerHTML = cost2;
document.getElementById("fincost").innerHTML = fincost;
function inc(N) {
    count+=N;
    if (count < 0)
    {
        count = 0;
        func();
        sum();
        return document.getElementById("count").innerHTML = count;
    }
    else if (count > 20)
    {
        count = 20;
        func();
        sum();
        return document.getElementById("count").innerHTML = count;
    }
    else {
        func();
        sum();
        return document.getElementById("count").innerHTML = count;
    }
};
function inc2(N) {
    count2+=N;
    if (count2 < 0)
    {
        count2 = 0;
        func2();
        sum();
        return document.getElementById("count2").innerHTML = count2;
    }
    else if (count2 > 20)
    {
        count2 = 20;
        func2();
        sum();
        return document.getElementById("count2").innerHTML = count2;
    }
    else {
        func2();
        sum();
        return document.getElementById("count2").innerHTML = count2;
    }
};
function func() {
    cost = 25*count;
    return document.getElementById("cost").innerHTML = cost;
};
function func2() {
    cost2 = 15*count2;
    return document.getElementById("cost2").innerHTML = cost2;
};
function sum() {
    fincost = cost+cost2;
    return document.getElementById("fincost").innerHTML = fincost;
};
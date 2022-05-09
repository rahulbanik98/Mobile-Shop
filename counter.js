var first = setInterval(firstFnction, 10);
let count0 = 1;

function firstFnction()
{
    count0++;
    document.querySelector("#total-project").innerHTML = count0;

    //Stop The Count
    if(count0 == 500)
    {
        clearInterval(first);
    }
}

var second = setInterval(secondFunction, 10);
let count1 = 1;

function secondFunction()
{
    count1++;
    document.querySelector("#sucess-ratio").innerHTML = count1;

    //Stop The Count
    if(count1==400)
    {
        clearInterval(second);
    }
}

var third = setInterval(thirdFunction, 10);
let count2 = 1;

function thirdFunction()
{
    count2++;
    document.querySelector("#happy-client").innerHTML = count2;

    //Stop Th Count
    if(count2==390)
    {
        clearInterval(third)
    }
}
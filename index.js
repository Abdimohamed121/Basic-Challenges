//1st challenge

function get1to255(arr){
    var arr = []
    for (var i=1; i<256; i++){
        arr.push(i);
    }
    console.log(arr);
}
get1to255();

// 2nd challenge

function geteven1000(){
    sum = 0
    for (var i=0; i<1001; i++){
        if (i%2==0){
            sum+=i;
        }
    }
    console.log(sum);
}
geteven1000();

// 3rd challenge

function getoddt05000(){
    sum = 0
    for (var i=0; i<5001; i++){
        if (i % 2 != 0){
            sum+=i;
        }
    }
    console.log(sum);
}
getoddt05000();

// 4th challenge

function Iterate(arr){
    var sum = 0;
    for (var i=1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
Iterate([2,6,8,10]);

// 5th challange

function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log("max is: " + max);
}
findMax([-1,8,12,50]);

// 6th challenge

function AverageOfArray(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
AverageOfArray([2,4,6,8]);

// 7th Challenge

function arrOdds(arr){
    var arr = [];
    for(var i = 1; i < 50; i++){
        if (i % 2 != 0){
            arr.push(i);
        }
    }
    console.log(arr);
}
arrOdds();

// 8th challenge

function greaterThanY(arr,y){
    var count = 0;
    for( var i = 0; i < arr.length; i++){
        if(arr[i]>y)
        count += 1;
    }
    console.log(count);
}
greaterThanY([5,5,8,6],3);
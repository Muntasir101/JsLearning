
let average=0;
let sum=0;

let arr = [
    1, 
    2, 
    3, 
    4, 
    5, 
    6, 
    7, 
    8, 
    9, 
    10];

let arr_length=arr.length;
console.log("Array Lenght: "+arr_length);

for(let i=0;i<arr.length;i++){
    sum +=arr[i];
    average=sum/arr_length;
}

console.log("Sum is "+sum); 
console.log("Average is "+average); 
//Accending order sorting

var arr = [1, 26, 48, 25, 3, 37, 44, 30, 17, 29];

function bblSort(arr){
     
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){

          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }

    console.log(arr);
   }
     
   bblSort(arr);
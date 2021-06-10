//bubble sort
function bubble(arr){

    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]<arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }

    return arr
}

console.log(bubble([2,1,3,4,9,5]))
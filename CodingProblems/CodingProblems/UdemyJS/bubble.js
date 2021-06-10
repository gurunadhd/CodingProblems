//bubble sort
//optized code to inlude noSwaps flag that helps to sort quickly for already nearly sorted arrays

function bubble(arr){
    var noSwaps
    for(var i=0;i<arr.length;i++){
        noSwaps=true
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

console.log(bubble([2,1,3,4,9,5,10,11,12,13,8]))
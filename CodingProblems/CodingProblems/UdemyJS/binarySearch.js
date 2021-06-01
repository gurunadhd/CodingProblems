// binary search

// function binarySearch(arr,a){
 
//     if(arr[parseInt(arr.length/2)]==a)
//         return true
//     else if(arr[parseInt(arr.length/2)]<a)
//         return binarySearch(arr.splice(parseInt(arr.length/2),arr.length-1),a)
//     else if(arr[parseInt(arr.length/2)]>a)
//         return binarySearch(arr.splice(0,parseInt(arr.length/2)),a)
//     else
//         return false

// }


function binarySearch(arr,a){
    var i=0,j=arr.length-1

    while(i<j){

        if(arr[i]==a) return i
        else if(arr[j]==a) return j
        else if(arr[i]<a) i++
        else if(arr[j>a]) j--
        

    }
    return -1
}

console.log(binarySearch([-2,-1,1,2,3,4,5,6],-1))

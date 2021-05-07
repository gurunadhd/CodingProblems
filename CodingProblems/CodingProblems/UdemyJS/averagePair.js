//averagePair funtion accepts sorted array and number to veify if array has a average of a pair as that number
function averagePair(arr,number){
    let i=0,j=arr.length-1

    while(i<j){
        if((arr[i]+arr[j])/2==number)
            return true
        else if((arr[i]+arr[j])/2>number)
            j--
        else if((arr[i]+arr[j])/2<number)
            i++
    }

    return false
}

console.log(averagePair([-1,2,3],0.5))
//LinearSearch that accepts an array and a data to search, returns index of the data or -1 if data not available

function LinearSearch(arr,search){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==search) return i
    }

    return -1
}

console.log(LinearSearch([1,2,3,4,5,'wer'],'w1er'))
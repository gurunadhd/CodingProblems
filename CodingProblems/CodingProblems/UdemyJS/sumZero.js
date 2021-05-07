// get first pair of sum of numbers as Zero from sorted array

// function sumZero(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===0)
//                 return [arr[i],arr[j]]
//         }
//     }
// }

function sumZero(arr){
    let i=0
    let j=arr.length-1
    while(i<j){

        if(arr[i]+arr[j]===0)
            return [arr[i],arr[j]] 
        else if(arr[i]+arr[j]>0)
            j--;
        else if(arr[i]+arr[j]<0)
            i++
    }
}

console.log(sumZero([-2,-1,2]))
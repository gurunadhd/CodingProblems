//Write function MaxSubArraySum which accepts array of integers and a number. 
//The function should calculate maximum sum of n consecutive elements of the array

// function MaxSubArraySum(arr,num){
//     if(num>arr.length || num<=0)
//         return -1
//     let maxSum=0
//     let sum=0
//     for(let i=0;i+num<=arr.length;i++){
//         sum=0
//         for(let j=i;j<i+num;j++){
//             sum=sum+arr[j]
//         }
//         if(sum>maxSum)
//             maxSum=sum
//     }
//     return maxSum
// }

function MaxSubArraySum(arr,num){
    let maxSum=0,tempSum=0

    for(let i=0;i+num<=arr.length;i++){
        if(tempSum==0){
            for(let j=i;j<i+num;j++){
                tempSum=tempSum+arr[j]
            }
        }
        else{
            tempSum=tempSum-arr[i-1]+arr[i+num-1]
        }

        if(tempSum>maxSum)
            maxSum =tempSum
    }

    return maxSum
}

console.log(MaxSubArraySum([1,3,5,6,7,8,2,3,100],3))
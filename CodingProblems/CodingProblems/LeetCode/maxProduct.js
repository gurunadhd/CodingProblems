// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

function maxProduct(nums){
    var maxProd = -Infinity
    var maxxTemp = 1
    var minTemp = 1
     
     for(var i= 0;i<nums.length;i++){
        [maxxTemp, minTemp]= [Math.max(maxxTemp*nums[i],minTemp*nums[i], nums[i]),Math.min(maxxTemp*nums[i],minTemp*nums[i], nums[i])]
        maxProd =Math.max(maxxTemp,maxProd, minTemp)
     }
    return maxProd
}

console.log(maxProduct([2,-5,-2,-4,3]))
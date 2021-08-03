// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
function maxSubArray(nums){
    var tempSum=0
    var maxsum=-Infinity

    for(var i=0;i<nums.length;i++){
        //comparing max of sum till now or current number. if sum is less, we will take current number and get sume of number sequence starting from current number
        tempSum =Math.max(tempSum+nums[i],nums[i])

        maxsum = Math.max(tempSum,maxsum)
    }
    return maxsum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
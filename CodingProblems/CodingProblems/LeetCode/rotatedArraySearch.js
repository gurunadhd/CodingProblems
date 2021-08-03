// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

function rotatedArraySearch(nums,target){

    // var left = 0
    // var right = nums.length-1
    // if(nums.length==1&&target ==nums[0]) return 0
    // while(left<right){
    //     if(nums[left]>target) left++
    //     else if(nums[right]<target) right --
    //     else{
    //         if(nums[left]==target) return left
    //         if(nums[right]== target) return right
    //     }
    // }
    // return -1
    //============================
    // var left = 0
    // var right = nums.length-1
    // if(nums.length==1&&target ==nums[0]) return 0
    // while(left<right){
    //     var mid = Math.floor((right+left)/2)
    //     if(target===nums[mid]) return mid
    //     else if(target===nums[left]) return left
    //     else if(target===nums[right]) return right
    //     else if(target>nums[left] && target<nums[mid]) right = mid-1
    //     else if(target>nums[mid] && target<nums[right]) left = mid+1
    //     else if(target>=nums[left]) right = mid-1
    //     else if(target<=nums[right]) left = mid+1
        
    // }
    // return -1

    var left = 0
    var right = nums.length-1
    if(nums.length==1&&target ==nums[0]) return 0
    while(left<=right){
        var mid = Math.floor((right+left)/2)
        if(target===nums[mid]) return mid
        // else if(target===nums[left]) return left
        // else if(target===nums[right]) return right
        else if(nums[mid]>=nums[left]) {
            if(target>nums[left] && target<nums[mid]) right = mid-1
            else left = mid+1
        }
        else if(nums[mid]<=nums[right]) {
            if(target>nums[mid] && target<nums[right]) left = mid+1
            else right = mid-1
        }   
        
    }
    return -1
}

console.log(rotatedArraySearch([4,5,6,7,0,1,2],2))
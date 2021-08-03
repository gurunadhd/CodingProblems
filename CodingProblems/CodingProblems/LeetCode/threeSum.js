// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]



//Approach
//=========
//sort numbers in asending order 
//use one for loop to select 1one of 3 values
//use while loop to select 2 other values like two sum problem using two pointers approach
// in the outer for loop, check if nums[i]>0 and skip loop as if i is >0, next numbers to be selected are > 0 and sum cannot be 0
//if there are duplicate data skip them in two places
// while i selection, if num[i] is same as num[i-1] continue to next iteration
// in the while loop, skip duplicates while moving pointers left or right in the twosum while loop

function threeSum(nums){
    // var output = []
    // if(nums.length <=3) return output
    // for(let i=0;i<nums.length;i++){
    //     for(let j=0;j<nums.length;j++){
    //         for(let k = 0;k<nums.length;k++){
    //             if(i!=j&& j!=k && i!=k &&  nums[i]+nums[j]+nums[k]===0)
    //                 output.push([nums[i],nums[j],nums[k]])
    //         }
    //     }
    // }
    // return output

    var output = []
    nums = nums.sort((a,b) => a-b)
    for(var i=0;i<nums.length-2;i++){
        if(nums[i]>0) break
        if(i>0 && nums[i]===nums[i-1]) continue
        var left = i+1
        var right = nums.length-1
        while(left<right){
            if(nums[i]+nums[left]+nums[right]<0) left++
            else if(nums[i]+nums[left]+nums[right]>0) right --
            else {
                output.push([nums[i],nums[left],nums[right]])
                
                while(left<right&& nums[left]===nums[left+1]) left++
                while(left<right && nums[right]===nums[right-1]) right--
                left++
                right--
            }
        }
    }
    return output
}

console.log(threeSum([-1,0,1,2,-1,-4]))



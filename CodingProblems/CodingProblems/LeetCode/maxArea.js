// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

function maxArea(height){
    // var maxArea = 0
    // for(var i=0;i<height.length;i++){
    //     for(var j=0;j<height.length;j++){
    //         if(Math.min(height[i],height[j])*(j-i)>maxArea)
    //             maxArea = Math.min(height[i],height[j])*(j-i)
    //     }
    // }
    // return maxArea

    var maxArea=0
    var h1=0, h2=height.length-1

    while(h1<h2){
        var area = Math.min(height[h1],height[h2])*Math.abs(h1-h2)
        if(area>maxArea) maxArea = area
        if(height[h1]>height[h2]) h2--
        else h1++
        
    }

    return maxArea
}

console.log(maxArea([1,3,2,5,25,24,5]))
//create a function that takes array of arrays and return a new array with all values flattened
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr){
    let flattenedArr=[]   
    helper(arr)

    function helper(arr){
        //if(arr.length==0) return flattenedArr
        if(Array.isArray(arr)==false) 
            return flattenedArr.push(arr)
        if(arr.length>1)
            return helper(arr[0]),helper(arr.splice(1))
        else if(Array.isArray(arr)==true) 
            return helper(arr[0])
    }
    
    return flattenedArr
}

console.log(flatten([[[[1]]],2,[3,4,[5]]]))
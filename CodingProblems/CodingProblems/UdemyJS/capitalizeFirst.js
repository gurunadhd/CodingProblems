//given array of strings capitalize first letter of each string

function capitalizeFirst(arr){

    let returnArr = []

    helper(arr)

    function helper(arr){

        if(arr.length==0) return returnArr
        return returnArr.push(arr[0][0].toUpperCase()+arr[0].substring(1)), helper(arr.splice(1))
    }

    return returnArr
}

console.log(capitalizeFirst(['car','taco','banana']))
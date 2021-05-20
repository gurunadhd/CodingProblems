//given array of strings capitalize each string


function capitalizeWords(arr){
    let returnArr =[]

    helper(arr)
    function helper(arr){
        if(arr.length ==0) return returnArr
        return returnArr.push(arr[0].toUpperCase()),helper(arr.splice(1))
    }

    return returnArr
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
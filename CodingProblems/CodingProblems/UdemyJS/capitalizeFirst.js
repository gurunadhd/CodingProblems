//given array of strings capitalize first letter of each string

//function capitalizeFirst(arr){

//     let returnArr = []

//     helper(arr)

//     function helper(arr){

//         if(arr.length==0) return returnArr
//         return returnArr.push(arr[0][0].toUpperCase()+arr[0].substring(1)), helper(arr.splice(1))
//     }

//     return returnArr
// }

function capitalizeFirst(array) {
    if (array.length === 1)
      return [array[0][0].toUpperCase() + array[0].substr(1)]

    const res = capitalizeFirst(array.slice(0, -1))
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1)
    res.push(string)
    return res
}

console.log(capitalizeFirst(['car','taco','banana']))
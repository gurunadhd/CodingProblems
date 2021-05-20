//given array of strings capitalize each string


// function capitalizeWords(arr){
//     let returnArr =[]

//     helper(arr)
//     function helper(arr){
//         if(arr.length ==0) return //returnArr
//         return returnArr.push(arr[0].toUpperCase()),helper(arr.splice(1))
//     }

//     return returnArr
// }


function capitalizeWords(arr){
    if(arr.length==1) return [arr[0].toUpperCase()] //to retun initial string in array otherArr.push would not work otherwise

    const otherArr = capitalizeWords(arr.slice(0, -1))
    const capitalizedWord = arr[arr.length-1].toUpperCase()
    otherArr.push(capitalizedWord)
    
    return otherArr
}
console.time('test')
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion',]))
console.timeEnd('test')
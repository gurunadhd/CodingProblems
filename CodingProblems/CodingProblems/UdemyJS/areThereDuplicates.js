// areThereDuplicates accepts a variable number of arguments and see if there are any duplicates

// function areThereDuplicates(){
//     let freq = {}

//     for(let a of arguments){
//         if(freq[a]>0)
//             return true
//         else
//             freq[a]=1
//     }

//     return false
// }

// function areThereDuplicates(){
    
//     arguments=Object.values(arguments).sort()
//     let i=0,j=1
//     while(j<arguments.length){
//         if(arguments[i]==arguments[j])
//             return true
//         else
//             i++
//             j++
//     }

//     return false
    
// }

function areThereDuplicates(){
    var s=new Set(arguments)
    if(s.size!=arguments.length)
        return true
    else
        return false
}

console.log(areThereDuplicates(1,"a","b","c","z",1))
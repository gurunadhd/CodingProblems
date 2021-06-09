// Naive String search to search a given pattern in a long string

// function NaiveStringSearch(str, searchStr){
//     let i=0,j=0
//     while(i<str.length&&j<searchStr.length){

//         if(str[i]===searchStr[j])  j++
//         else j=0
//         i++
//     }

//     if(j===searchStr.length) return true
//     else return false
// }

// function NaiveStringSearch(long,short){
//     for(var i=0;i<long.length;i++){
//         for(var j=0;j<short.length;j++){
//             if(long[i]===short[j]){
//                 i++
//                 if(j===short.length-1)  return true
//             }    
//             else break
//         }
//     }

//     return false
// }

function NaiveStringSearch(lo,sho){
    for(var i=0;i<lo.length;i++){
        for(var j=0;j<sho.length;j++){
            if(lo[i+j]!==sho[j]) break
            if(j===sho.length-1) return true
        }
    }

    return false
}

//console.log(NaiveStringSearch("ab","b"))
console.log(NaiveStringSearch("abc abcabca abbcbab abc","abbca"))
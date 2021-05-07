// function takes 2 strings and check if 1st string characters are subsequence in the 2nd string in the same order

// function isSubsequence(str1,str2){
//     let i=0,j=0
//     if(str1.length>str2.length)
//         return false
    
//     while(i<str1.length&&j<str2.length){
//         if(str1[i]==str2[j]){
//             i++
//             j++
//         }
//         else
//             j++
                
//     }

//     if(i==str1.length)
//         return true
//     else
//         return false
// }

// function takes 2 strings and check if 1st string characters are subsequence in the 2nd string in the exact same order with out any string1 other characters

function isSubsequence(str1,str2){
    let i=0,j=0
    let subseq=false
    if(str1.length>str2.length)
        return false
    
    while(i<str1.length&&j<str2.length){
        if(str1[i]==str2[j]){
            i++
            j++
            subseq=true
        }
        else if(str1[0]==str2[j]){
            j++
            i=1
        }
        else if(str1.includes(str2[j])){
            i=0
            j++
        }
        else
            j++
                
    }

    if(i==str1.length)
        return true
    else
        return false
}
console.log(isSubsequence("abc","abrbabc"))
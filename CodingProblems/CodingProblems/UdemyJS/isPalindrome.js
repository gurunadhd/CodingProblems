// function isPalindrome(str){
//     let reverse_str= reverseHelper(str)
//     function reverseHelper(str){
//         if(str.length==1) return str[0]
//         return str[str.length-1]+reverseHelper(str.substring(0,str.length-1))
//     }

//     if(str==reverse_str) return true
//     else return false
// }


function isPalindrome(str){
    if(str.length==1) return true
    if(str.length==2) return str[0]==str[1]

    if(str[0]==str[str.length-1]) return isPalindrome(str.substring(1,str.length-1))
    return false
}

console.log(isPalindrome("aa"))
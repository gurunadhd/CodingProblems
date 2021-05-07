// function Anagram(str1,str2){
//     if(str1.length!=str2.length)
//         return false

//     var freq1={}
//     var freq2 = {}

//     for(var a of str1){
//         if(freq1[a]>0)
//             freq1[a]++
//         else
//             freq1[a]=1 
//     }

//     for(var a of str2){
//         if(freq2[a]>0)
//             freq2[a]++
//         else
//             freq2[a]=1 
//     }

//     for(var a of str1){
//         if(freq1[a]!=freq2[a])
//             return false 
//     }

//     return true
// }

function Anagram(str1,str2){

    if(str1.length!=str2.length)
        return false
    
    let freq={}

    for(let a of str1){
        if(freq[a]>0)
            freq[a]++
        else
            freq[a]=1
    }

    for(let a of str2){
        if(freq[a]>0)
            freq[a]--
         else
            return false
    }

    return true

}
console.log(Anagram("1 abcbbzv","vzbcbba1"))
//Create a function that accepts a string and returns length of longest substring with distinct characters

function findLongestSubstring(str){
    let count=0,tempcount=0
    let i=0
    let distinct = {}
    while(i<str.length){
        if(distinct[str[i]]>0)
            break
        else{ 
            distinct[str[i]]=i+1          
            i++
        }            
    }
    count=i
    i=distinct[str[i]]
    distinct = {}

    while(i<str.length){
        

        if(distinct[str[i]]>0){
            i=distinct[str[i]]
            distinct = {}
            if(tempcount>count){
                count = tempcount              

            }
            tempcount=0   

        }
            
        else{  
            distinct[str[i]]=i+1          
            i++
            tempcount++
        }       
       
    }

    if(tempcount>count)
        count = tempcount

    return count
}

console.log(findLongestSubstring("longestsubstring"))
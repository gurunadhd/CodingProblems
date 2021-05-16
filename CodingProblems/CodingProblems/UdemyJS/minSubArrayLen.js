//write a function which accepts an array of positive intigers and positive intiger num.
//function should retun minimal length of continuous sub array which sum is greater than or equal to num
//return 0  if there is no continous sub array as expected

function minSubArrayLen(arr,num){
    let count =0,tempCount=0,total=0
    let i=0

    while(total<num){
        
        total = total+arr[i] 
        tempCount++
        i++
        if(i>arr.length)  
            return 0     
    }

    count = tempCount

    while(i<=arr.length){
        
        if(total<num){   
            total = total+arr[i]         
            i++
            tempCount++
        }
        else{
            total = total-arr[i-count]
            tempCount--
        }

         if(tempCount<count & total>=num)
            count = tempCount
        
    }

    return count

}

console.log(minSubArrayLen([2,3],7))
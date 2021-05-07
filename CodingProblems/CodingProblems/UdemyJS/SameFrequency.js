//given two positive numbers, find out if both has same frequecy of digits

function SameFrequency(num1,num2){
    
    if(num1<0 || num2<0)
        return false
    else if(num1==num2)
        return true
    
    let freq1 = {}

    while(num1>0){
        let i = num1%10
    
        if(freq1[i]>0)
            freq1[i]++
        else
            freq1[i]=1
        
            num1 = Math.floor(num1/10)
    }

    while(num2>0){
        let i = num2%10
        if(freq1[i]>0)
            freq1[i]--
        else
            return false
        
        num2 = Math.floor(num2/10)
    }

    if(Object.values(freq1).some(x => (x != 0)))
        return false
    else
        return true
    
}

console.log(SameFrequency(123,1123))
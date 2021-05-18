//create a function that adds up to the number given to the function

function recursiveRange(num){
    if(num==1) return 1
    return num+recursiveRange(num-1)
}

console.log(recursiveRange(10))
// function Factorial(number){
//     let factorial=1
//     for(let i=2;i<=number;i++){
//         factorial = factorial*i
//     }

//     return factorial
// }


function Factorial(number){
    if(number == 1 || number == 0)
        return 1
    else
        return number*Factorial(number-1)
}

console.log(Factorial(1))
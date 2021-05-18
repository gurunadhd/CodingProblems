function Power(number, exponent){
    if(exponent === 0) return 1

    return number * Power(number, exponent-1)
}

console.log(Power(-3,0))
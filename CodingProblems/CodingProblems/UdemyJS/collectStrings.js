//get strings of an object and return as array 

function collectStrings(obj){
    var strings = []

    for(var key in obj){
        if(typeof obj[key] =="string")
            strings.push(obj[key])
        else if(typeof obj[key]=="object")
            return strings.concat(collectStrings(obj[key]))

    }

    return strings
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))
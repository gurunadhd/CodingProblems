class hashTable{
    constructor(size=53){
        this.hash = new Array(size)
    }
    _hash(key){
        var prime_number = 13
        var total = 0
        for(let i=0;i<=Math.log(key.length,100);i++){
            let char = key[i]
            let value = char.charCodeAt(0)-96
            total = (total * prime_number + value) % this.hash.length;
        }
        return total
    }
    set(key, value){
        var index = this._hash(key)
        if(!this.hash[index])
            this.hash[index] = []
        this.hash[index].push([key,value])

        return this
    }
    get(key){
        var index = this._hash(key)
        if(this.hash[index]){
            for(var i=0;i<this.hash[index].length;i++){
                if(this.hash[index][i][0]===key)
                    return this.hash[index][i]
            }
        }
        else return undefined
    }
    keys(){
        var keys = []
        for(var i=0;i<this.hash.length;i++){
            if(this.hash[i]){
                for(var j=0;j<this.hash[i].length;j++)
                    keys.push(this.hash[i][j][0])
            }
        }
        return keys
    }
    values(){
        var values = []
        for(var i=0;i<this.hash.length;i++){
            if(this.hash[i]){
                for(var j=0;j<this.hash[i].length;j++)
                    if(!values.includes(this.hash[i][j][1]))
                        values.push(this.hash[i][j][1])
            }
        }
        return values
    }
}

var hashTab = new hashTable()
console.log(hashTab)
console.log(hashTab.set("test",1))
console.log(hashTab.set("tram2sss1",12))
console.log(hashTab.set("tram2sss1",12))
console.log(hashTab.get("tram2sss1"))
console.log(hashTab.keys())
console.log(hashTab.values())

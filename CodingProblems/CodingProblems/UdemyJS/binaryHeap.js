class binaryHeap{
    constructor(){
        this.values = []
    }

    insert(val){
        if(this.values.length==0){
            this.values.push(val)
        }
        else{
            this.values.push(val)
            var parent_index = Math.floor((this.values.length-2)/2)
            var current_index= this.values.length-1
            while(this.values[current_index]>=this.values[parent_index]){
                this.values[current_index]=this.values[parent_index]
                this.values[parent_index] = val
                current_index = parent_index
                parent_index = Math.floor((parent_index-1)/2)
            }
        }
        return this
    }
    extractMax(){
        if(this.values.length<=0) return undefined
        else if(this.values.length==1) return this.values.shift()
        else{
            var returnValue = this.values[0]
            this.values[0] = this.values.pop()
            var parent_index = 0
            var left_index = 1
            var right_index = 2
            while(true){
                if(left_index<=this.values.length-1 && this.values[parent_index]<this.values[left_index]){
                    var temp = this.values[left_index]
                    this.values[left_index] = this.values[parent_index]
                    this.values[parent_index] = temp
                    parent_index = left_index
                    left_index = 2*parent_index+1
                    right_index = 2*parent_index+2
                }
                else if(right_index<=this.values.length-1 && this.values[parent_index]<this.values[right_index]){
                    var temp = this.values[right_index]
                    this.values[right_index] = this.values[parent_index]
                    this.values[parent_index] = temp
                    parent_index = right_index
                    left_index = 2*parent_index+1
                    right_index = 2*parent_index+2
                }
                else break
            }
            return returnValue
        }
    }
}

myheap = new binaryHeap()
console.log(myheap)
console.log(myheap.insert(1))
console.log(myheap.insert(2))
console.log(myheap.insert(3))
console.log(myheap.insert(4))
console.log(myheap.insert(32))
console.log(myheap.insert(-32))
console.log(myheap.insert(23))
console.log(myheap.insert(44))
console.log(myheap.insert(-32))
console.log(myheap.insert(30))
console.log(myheap.extractMax())
console.log(myheap)

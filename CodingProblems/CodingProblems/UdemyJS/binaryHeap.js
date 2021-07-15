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
            while(parent_index>=0 && this.values[current_index]>=this.values[parent_index]){
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
                var swapIndex = -1
                if(left_index<=this.values.length-1 && this.values[parent_index]<this.values[left_index]){
                    swapIndex = left_index
                }
                if(right_index<=this.values.length-1 && this.values[parent_index]<this.values[right_index]){
                    if(left_index<=this.values.length-1 && this.values[right_index]>this.values[left_index])
                        swapIndex = right_index
                }
                if (swapIndex==-1) break
                else{
                    var temp = this.values[swapIndex]
                    this.values[swapIndex] = this.values[parent_index]
                    this.values[parent_index] = temp
                    parent_index = swapIndex
                    left_index = 2*parent_index+1
                    right_index = 2*parent_index+2
                }
                
            }
            return returnValue
        }
    }
}

myheap = new binaryHeap()
console.log(myheap)

console.log(myheap.insert(2))
console.log(myheap.insert(4))
console.log(myheap.insert(3))
console.log(myheap.insert(1))
console.log(myheap.insert(10))
console.log(myheap.insert(-1))
console.log(myheap.insert(11))
console.log(myheap.extractMax())
console.log(myheap)

class node{
    constructor(val, priority){
        this.val = val
        this.pri = priority
    }
}

class priorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(val,pri){
        if(this.values==0) this.values.push(new node(val, pri))
        else{
            this.values.push(new node(val, pri))
            var currentIndex = this.values.length-1
            var parentIndex = Math.floor((this.values.length-2)/2)

            while(parentIndex>=0 && this.values[parentIndex].pri>=this.values[currentIndex].pri){
                var temp = this.values[parentIndex]
                this.values[parentIndex] = this.values[currentIndex]
                this.values[currentIndex] = temp

                currentIndex = parentIndex
                parentIndex = Math.floor((parentIndex-1)/2)
            }
        }
        return this
    }

    dequeue(){
        if(this.values.length<=0) return undefined
        else if(this.values.length ===1) return this.values.shift()
        else{
            var returnNode = this.values[0]
            this.values[0]=this.values.pop()
            var parentIndex = 0
            var leftIndex = 1
            var rightIndex=2

            while(true){
                var swapIndex = -1
                if(leftIndex<=this.values.length-1 && this.values[leftIndex].pri<=this.values[parentIndex].pri)
                    swapIndex=leftIndex
                if(rightIndex<=this.values.length-1 && this.values[rightIndex].pri<=this.values[parentIndex].pri){
                    if(this.values[leftIndex].pri>this.values[rightIndex].pri)
                        swapIndex=rightIndex
                }

                if(swapIndex===-1) break
                else{
                    var temp = this.values[parentIndex]
                    this.values[parentIndex]=this.values[swapIndex]
                    this.values[swapIndex] = temp

                    parentIndex = swapIndex
                    leftIndex = 2*parentIndex+1
                    rightIndex = 2*parentIndex+2
                }
            }

        }
        return returnNode
    }
}


var myqueue = new priorityQueue()
console.log(myqueue)
console.log(myqueue.enqueue("A",1))
console.log(myqueue.enqueue("C",3))
console.log(myqueue.enqueue("B",2))
console.log(myqueue.enqueue("zero",0))
console.log(myqueue.enqueue("a",-1))
console.log(myqueue.enqueue("a",-1))
console.log(myqueue.enqueue("b",-1))
console.log(myqueue.enqueue("b",10))
console.log(myqueue.enqueue("b",-2))
console.log(myqueue.dequeue())
console.log(myqueue.enqueue("b",1))
console.log(myqueue.enqueue("b",-3))
console.log(myqueue.dequeue())
console.log(myqueue)
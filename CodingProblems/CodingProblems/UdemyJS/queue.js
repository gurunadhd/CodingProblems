class node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class queue{
    constructor(){
        this.first= null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        if(this.size==0){
            this.first = new node(val)
            this.last = this.first
        }
        else{
            var newNode = new node(val)
            newNode.next = this.first
            this.first.prev = newNode
            this.first = newNode
        }
        this.size++
        return this.size
    }
    dequeue(){
        if(this.size<=0) return undefined
        else if(this.size==1){
            this.size--
            return this.last
        }
        else{
            var dequeueNode = this.last
            this.last = this.last.prev
            this.last.next = null
            dequeueNode.prev = null
            this.size--
            return dequeueNode
        }
    }
}

var thisQueue = new queue()
console.log(thisQueue)
console.log(thisQueue.enqueue(1))
console.log(thisQueue.enqueue(2))
console.log(thisQueue.dequeue())
console.log(thisQueue)
console.log(thisQueue.enqueue(3))
console.log(thisQueue.dequeue())
console.log(thisQueue.dequeue())
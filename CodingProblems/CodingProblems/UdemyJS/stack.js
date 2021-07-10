class node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        if(this.size===0){
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

    pop(val){
        if(this.size<=0) return undefined
        else if(this.size==0) {
            this.size--
            return this.first
        }
        else{
            var poppedNode = this.first
            this.first = this.first.next
            poppedNode.next = null
            poppedNode.prev = null
            this.size--
            return poppedNode
        }
    }
}

var newStack = new stack()
console.log(newStack)
console.log(newStack.push(1))
console.log(newStack.push(2))
console.log(newStack.pop())
console.log(newStack.push(3))
console.log(newStack)
console.log(newStack.pop())
console.log(newStack.pop())

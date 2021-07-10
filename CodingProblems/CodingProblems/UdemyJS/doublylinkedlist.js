class node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublylinkedlist{
    constructor(){
        this.length =0
        this.head = null
        this.tail = null
    }

    push(val){
        if(this.length==0){
            this.head = new node(val)
            this.tail = this.head
        }
        else{
            var newNode = new node(val)
            newNode.prev = this.tail
            this.tail.next = newNode            
            this.tail = newNode            
        }
        this.length++
        return this
    }
    pop(){
        if(this.length==0) return undefined
        var poppedNode = this.tail
        if (this.length==1){
            this.head = null
            this.tail = null
        }
        else{
            this.tail = poppedNode.prev
            this.tail.next=null
            poppedNode.prev = null       
        }
        this.length--
        return poppedNode
    }
    shift(){
        if(!this.head) return undefined
        var shiftNode = this.head
        if(this.length==1){
            this.head=null
            this.tail=null
        }
        else{
            this.head = this.head.next
            this.head.prev=null
            shiftNode.next=null
        }
        this.length--
        return shiftNode
    }
    unshift(val){
        var newNode = new node(val)
        if(this.length==0){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.head.prev = newNode
            this.head = this.head.prev
        }
        this.length++
        return this
    }
    get(index){
        if(index<0||index>this.length-1) return undefined
        else if(index==0) return this.head
        else if(index==this.length-1) return this.tail
        else if(index<=this.length/2){
            var currentNode = this.head
            for(let i =0;i<index;i++){
                currentNode = currentNode.next
            }
        }
        else if(this.length/2<index){
            var currentNode = this.tail
            for(let i =this.length-1;i>index;i--){
                currentNode = currentNode.prev
            }
        }
        return currentNode
    }
    set(index,val){
        var currentNode = this.get(index)
        if(currentNode==undefined) return undefined
        else currentNode.val = val
        return this
    }

    insert(index,val){
        var currentNode = this.get(index)
        if(currentNode==undefined) return undefined
        else{
            var newNode = new node(val)
            newNode.prev = currentNode.prev
            newNode.next = currentNode
            currentNode.prev = newNode            
            newNode.prev.next = newNode
        } 
        this.length++
        return this
        // if(index<0||index>this.length) return undefined
        // else if(index==0) this.unshift(val)
        // else if(index==this.length) this.push(val)
        // else{
        //     var newNode = new node(val)
        //     var beforeNode = this.get(index-1)
        //     var afterNode = this.get(index) 

        //     beforeNode.next = newNode
        //     newNode.prev = beforeNode
        //     newNode.next = afterNode            
        //     afterNode.prev = newNode
        // }   
        // this.length++
        // return this
    }
    remove(index){
        if(index<0||index>this.length-1) return undefined
        else if(index==0) this.shift()
        else if(index==this.length-1) this.pop()
        else{
            var beforeNode = this.get(index-1)
            var afterNode = this.get(index+1) 

            beforeNode.next = afterNode           
            afterNode.prev = beforeNode
        }   
        this.length--
        return this
    }
    reverse(){
        if(this.length<=1) return this
        else{
            var currentNode = this.head
            this.head = this.tail
            this.tail = currentNode
            var prevNode = null
            var nextNode = currentNode.next
            for(let i = 0;i<this.length;i++){
                nextNode = currentNode.next
                currentNode.next = prevNode
                currentNode.prev = nextNode
                prevNode = currentNode
                currentNode = nextNode
            }
            return this
        }
    }
}

var list = new doublylinkedlist
//console.log(list)
console.log(list.push(10))
list.push(20)
list.push(30)
list.push(21)
list.push(32)
list.push(211)
list.push(322)
// console.log(list)
// console.log(list.pop())
// console.log(list)
console.log(list.reverse())
// console.log(list.unshift(232))
// console.log(list)
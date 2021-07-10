class Node{
    constructor(val){   
        this.val = val
        this.next=null
    }
}

class SingleLinkedList{
    constructor(){
        this.length=0
        this.head = null
        this.tail = null
    }

    push(val){ //adding a new node at end
        if(this.head==null){
            this.tail = new Node(val)
            this.head = this.tail
        }
        else{
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
        this.length++
        return this
    }

    pop(){ //removing a node at end
        if(this.length==0)
            return undefined
        else if(this.length==1){
            var currentNode = this.head
            this.length--
            this.head = null
            this.tail = null
            return currentNode
        }            
        else{
            var returnNode = this.tail
            var currentNode = this.head
            while(currentNode.next.next!=null){
                currentNode = currentNode.next
            }
            currentNode.next=null
            this.tail = currentNode
            this.length--
            return returnNode
        }        
    }

    shift(){ //removing a node at start
        if(this.length==0)  return undefined
        else if(this.length==1){
            var currentNode = this.head
            this.head = null
            this.tail = null
            this.length--
            return currentNode
        }
        else{
            var currentNode = this.head
            this.head = currentNode.next
            currentNode.next=null
            this.length--
            return currentNode
        }
    }

    unshift(val){ //adding new node at start
        if(this.length==0){
            this.head = new Node(val)
            this.tail = this.head
        }
        else{
            var currentHead = this.head
            this.head = new Node(val)
            this.head.next = currentHead
        }
        this.length++
        return this
    }

    get(index){ //get value at index
        if(index<0||index>this.length-1) return undefined
        else if(index==0) return this.head
        else if(index==this.length-1) return this.tail
        else{
            var currentNode = this.head
            while(index>=0){
                currentNode = currentNode.next
                index--
            }
            return currentNode
        }
    }
    insert(index,val){ //update node at index
        if(index<0||index>this.length)    return undefined
        else if(index ==0) return this.unshift(val)
        else if(index == this.length) return this.push(val)
        else{
            var currentNode = this.head
            while(index>=2){
                currentNode = currentNode.next
                index--
            }
                
            var nextNode = currentNode.next            
            currentNode.next = new Node(val)
            currentNode.next.next = nextNode
            this.length++
            return this
        }
    }

    set(index,val){ //sent new node at index
        if(index<0||index>this.length-1)    return undefined
        else if(index==0) this.head.val = val
        else if (index==this.length-1) this.tail.val = val
        else{
            var currentNode = this.head
            while(index>=1){
                currentNode = currentNode.next
                index--
            }
            currentNode.val = val
        }
        
        return this
    }

    remove(index){ //remove a node at index
        if(index<0||index>this.length)    return undefined
        else if(index ==0) return this.shift()
        else if(index == this.length-1) return this.pop()
        else{
            var currentNode = this.head
            while(index>=2){
                currentNode = currentNode.next
                index--
            }
                          
            currentNode.next = currentNode.next.next
            this.length--
            return this
        }
    }

    reverse(){
        if(this.length<=1) return this
        if(this.length==2){
            var oldHead = this.head
            this.head = this.tail            
            this.tail = oldHead
            this.tail.next = null
            this.head.next = this.tail
        }
        else{
            var listLength = 0
            var node = this.head
            this.head = this.tail
            this.tail = node           
            var prev = null
            var Next = node.next
            while(listLength<this.length){
                Next = node.next
                node.next = prev
                prev = node
                node = Next
                listLength++
            }            
            return this
        }        
    }
}

// var first = new Node(5)
// first.next=new Node(2)

var list = new SingleLinkedList()
//console.log(list)
list.push(5)
list.push(10)
list.push(12)
// list.push(19)
// list.push(32)
// list.push(52)
// list.pop()
// list.pop()
// list.pop()
console.log(list)
//console.log(list.set(1,3333))
//console.log(list.remove(2))
console.log(list.reverse())
console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// list.push(199)
// console.log(list.push(200))
// console.log(list.unshift(201))
// console.log(list.get(200))
// console.log(list.get(0))
// console.log(list.get(3))
// console.log(list.get(7))
// console.log(list.get(6))
// console.log(list.get(-1))
// console.log(list.pop())
// console.log(list)
// list.push(52)sssss
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
//console.log(list)

class node{
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class bst{
    constructor(){
        this.root = null
    }

    insert(val){
        if(this.root == null){
            this.root = new node(val)
        }
        else{
            var newNode = new node(val)
            var nodeAdded = false
            var currentNode = this.root
            while(!nodeAdded){
                if(val===currentNode.val) return undefined
                if(val>currentNode.val){
                    if(currentNode.right!=null) currentNode = currentNode.right
                    else {
                        currentNode.right = newNode
                        nodeAdded = true
                    }
                }
                else{
                    if(currentNode.left!=null) currentNode = currentNode.left
                    else {
                        currentNode.left = newNode
                        nodeAdded = true
                    }
                }
            }
        }
        return this
    }   

    contains(val){
        if(this.root == null) return undefined
        else{
            if(this.root.val == val) return true
            var currentNode = this.root
            while(currentNode){
                if(val===currentNode.val) return true
                else if(val>currentNode.val) currentNode = currentNode.right
                else currentNode = currentNode.left
            }
        }
        return false
    }  

    find(val){
        if(this.root == null) return undefined
        else{
            if(this.root.val == val) return this.root
            var currentNode = this.root
            while(currentNode){
                if(val===currentNode.val) return currentNode
                else if(val>currentNode.val) currentNode = currentNode.right
                else currentNode = currentNode.left
            }
        }
        return undefined
    }

    bfs(){
        var currentNode = this.root,
            data = [],
            queue = [];
            queue.push(currentNode.val);

        while(queue.length!=0){
            currentNode = this.find(queue.shift());
           data.push(currentNode.val);
           if(currentNode.left) queue.push(currentNode.left.val);
           if(currentNode.right) queue.push(currentNode.right.val);
        }
        return data;
    }
    dfs(){
        var currentNode = this.root
        var data = []
        this.dfshelper(currentNode,data)
        return data
    }

    dfshelper(node, data){
        if(node.left) this.dfshelper(node.left, data)
        data.push(node.val)
        if(node.right) this.dfshelper(node.right, data)        
    }
    
}

var mybst = new bst()
console.log(mybst)
// console.log(mybst.insert(10))
// console.log(mybst.insert(15))
// console.log(mybst.insert(25))
// console.log(mybst.insert(5))
// console.log(mybst.insert(20))
// console.log(mybst.insert(0))
// console.log(mybst.insert(100))
// console.log(mybst.insert(75))
// console.log(mybst.insert(70))
// console.log(mybst.insert(71))
// console.log(mybst.insert(72))
// console.log(mybst.insert(85))
// console.log(mybst.insert(105))
// console.log(mybst.insert(50))
// console.log(mybst.insert(45))
// console.log(mybst.insert(40))

console.log(mybst.insert(10))
console.log(mybst.insert(5))
console.log(mybst.insert(0))
console.log(mybst.insert(15))
console.log(mybst.insert(25))
console.log(mybst.insert(20))
console.log(mybst.insert(100))
console.log(mybst.insert(75))
console.log(mybst.insert(70))
console.log(mybst.insert(50))
console.log(mybst.insert(45))
console.log(mybst.insert(40))
console.log(mybst.insert(71))
console.log(mybst.insert(72))
console.log(mybst.insert(85))
console.log(mybst.insert(105))
console.log(mybst.bfs())
console.log(mybst.dfs())
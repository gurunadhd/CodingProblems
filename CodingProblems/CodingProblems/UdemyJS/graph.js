class graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(Vertex){
        if(!this.adjacencyList[Vertex]) this.adjacencyList[Vertex]=[]
        return this
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
        else return undefined
        return this
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
            for(var i=0;i<this.adjacencyList[vertex1].length;i++){
                if(this.adjacencyList[vertex1][i]==vertex2)
                this.adjacencyList[vertex1].splice(i,1) 
            }
            for(var i=0;i<this.adjacencyList[vertex2].length;i++){
                if(this.adjacencyList[vertex2][i]==vertex1)
                this.adjacencyList[vertex2].splice(i,1) 
            }
        }
        else return undefined
        return this
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length>0){
                this.removeEdge(vertex,this.adjacencyList[vertex][0])
            }
            delete this.adjacencyList[vertex]
            return this
        }
        else return undefined
    }
}

var myGraph = new graph()
console.log(myGraph.addVertex("A"))
console.log(myGraph.addVertex("B"))
console.log(myGraph.addVertex("C"))
console.log(myGraph.addEdge("A","B"))
console.log(myGraph.addEdge("A","C"))
console.log(myGraph.removeVertex("A"))
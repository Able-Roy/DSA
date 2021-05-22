class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    /*
        function to insert new node to the stack
    */
    push(val){
        const newNode = new Node(val);
        if(this.top === null){
            this.top = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        return this;
    }
    /*
        function to remove a node from the top of the stack
    */
    pop(){
        if(this.top === null){
            console.log('Stack underflow');
            return false;
        }
        else{
            let currentNode = top;
            this.top = this.top.next;
            return currentNode
        }

    }
}
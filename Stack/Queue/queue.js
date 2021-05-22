class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }
    /*
        function to add node from the end of the queue
    */
    enquee(val){
        const newNode = new Node(val);
        if(this.back === null){
            this.back = this.front = newNode;
        }
        else{
            this.back.next = newNode;
            this.back = newNode;
        }
        return this;
    }
    /*
        function to remove a node from the front of the queue
    */
   dequeue(){
        if(this.front === null){
            console.log('Queue is empty');
            return false;
        }
        else{
            const currentNode = this.front;
            this.front = this.front.next;
            if(this.front === null){
                this.back = null; 
            }
            return currentNode;
        }
   }

}
q = new Queue();
q.enquee(1);
q.enquee(2);
q.enquee(3);
q.enquee(4);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
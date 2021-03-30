/*
    node class 
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/*
    doubly linked list class
*/
class DoublyLinkedList {
    constructor(val) {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    /*
        function to push value to the doubly linked list
    */
    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    /*
        function to unshift 
        doubly linked list
    */
    unshift(val){
        const newNode = new Node(val);

        if(this.head === null){
            this.head = this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length ++;
        return this;
    }
    /*
        function to perform shift operation in doubly linked list
    */
   shift(){
        if(this.head === null) return undefined;
        if(this.head.next === null){
            this.head = this.tail = null;
            this.length --;
            return null;
        }
        else{
            let tempHead = this.head;
            this.head = tempHead.next;
            this.head.prev = null;
            this.length --;
            if(this.length === 0){
                this.tail = null;
            }
            tempHead = null;
            return this;
        }
   }
}

// individual nodes of a linked list
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail - null;
        this.length = null;
    }

    /*
        function to add a node to the end of the linkedlist
    */
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length ++;
        return this;
    }

    /*
        function to remove a node from the end of the linked list
    */
    pop(){

        if(this.tail === null){
            return null;
        }
        else if(this.head.next === null){
            this.head = null;
            this.tail = null;
            return null;
        }
        else{
            let prev = this.head;
            let cur = this.head;
            while(cur.next != null){
                prev = cur;
                cur = cur.next
            }
            cur = null;
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return this;
        }
    }
    shift(){
        if(this.head === null){
            return null;
        }
        else if(this.head.next === null){
            this.head = null;
            this.length--;
            return null;
        }
        else{
            let newHead = this.head.next;
            this.head = newHead
            this.length --;
            return this;
        }
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}


list = new SinglyLinkedList();

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));

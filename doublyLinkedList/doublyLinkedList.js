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
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /*
            function to unshift 
            doubly linked list
        */
  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /*
            function to perform shift operation in doubly linked list
        */
  shift() {
    if (this.head === null) return undefined;
    if (this.head.next === null) {
      this.head = this.tail = null;
      this.length--;
      return null;
    } else {
      let tempHead = this.head;
      this.head = tempHead.next;
      this.head.prev = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      tempHead = null;
      return this;
    }
  }
  set(index, val) {
    if (index < this.length && index > this.length) return undefined;
    let counter = 0;

    if (index === this.length) return this.push(val) ? true : false;
    if (index === 1) return this.unshift(val) ? true : false;

    let currentNode = this.head;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    const newNode = new Node(val);
    newNode.next = currentNode;
    newNode.prev = currentNode.prev;
    currentNode.prev.next = newNode;
    currentNode.prev = newNode;

    this.length++;

    return true;
  }
  pop(){
      if(this.tail === null) return null;

      if(this.length == 1){
          this.tail = this.head = null;
          this.length--;
          return null;
      }

      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length --;
      return this;
    }
    get(index){
        if(index > this.length){
            return undefined;
        }
        let count = 0;
        let currentNode = this.head;
        while(count < index ){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}

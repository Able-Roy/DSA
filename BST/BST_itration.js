class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  /*
    function to insert a node to the BST
  */
  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode && currentNode.val === val) {
        return undefined;
      }
      if (currentNode.value > val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      if (currentNode.value < val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  /*
    function to fetch BST node
  */
  find(val){
    let currentNode = this.root;
    while(true){
        if(currentNode && currentNode.value === val){
            return currentNode;
        }
        else if(currentNode && currentNode.value > val){
            currentNode = currentNode.left;
        }
        else if (currentNode && currentNode.value < val){
            currentNode = currentNode.right;
        }
        else{
            return undefined;
        }
    }
  }
}
var tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(16));
console.log(tree.find(7));
console.log(tree.find(10));
console.log(tree.find(1));


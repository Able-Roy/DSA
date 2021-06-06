class MaxBinaryHeap{
    constructor(){
        this.heapArray = [];
    }
    /*
        finction to insert values to the array
    */
    insert(val){
        this.heapArray.push(val);
        this.bubbleUp();
        return this.heapArray;
    }
    /*
        function to bubble up the smaller element to the top to restore max-heap properties
    */
    bubbleUp(){
       let indexOfChild = this.heapArray.length - 1;
       const element = this.heapArray[indexOfChild];
       //loop through the array to swap small and large elements
       while(indexOfChild > 0){
           let parentElementIndex = Math.floor(indexOfChild - 1 / 2 );

           //exit loop if the heap is alredy maintaine heap property
           if(this.heapArray[indexOfChild] < this.heapArray[parentElementIndex])break;

           //swap values between parent and child
           this.heapArray[indexOfChild] = this.heapArray[parentElementIndex];
           this.heapArray[parentElementIndex] = element;

           //change the child index
           indexOfChild = parentElementIndex;

       }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
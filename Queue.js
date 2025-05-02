class Queue{
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.item = {};
    }

    enqueue(element){
        /* Add elemt into the Queue */
        this.item[this.rear] = element;
        this.rear++;
        console.log("Inserted item is:" + element);
    }

    dequeue(){
        /* Remove element from the Queue */
        if(this.item.length === 0){
              console.log("Queue is Empty!");
        }
        const data = this.item[this.front];
        delete this.item[this.front];
        console.log("Deleted item is:"+ data);
        this.front++;
    }

    display(){
        /* Display all the elements in the Queue */
        const temp = this.front;
        if(this.size === 0){
            console.log("Queue is Empty!");
        }
        console.log("Queue elemets are:");
        while(this.front !== this.rear){
            console.log(this.item[this.front]);
            this.front++;
        }
        this.front = temp;
    }

    size(){
        /* Get the size of the Queue */
        const result = this.rear - this.front;
        console.log("Size of the queue is:" + result);
        return result;
    }

    peek(){
        /* Get the front element of the Queue */
        if(this.item.length === 0){
            console.log("Queue is Empty!");
        }
        console.log("Peek item is:" + this.item[this.front]);
    }

    getValue(){
        /* Get the front and rear values of the Queue */
        console.log(`Front is ${this.front} and rear is ${this.rear}`);
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.dequeue();
myQueue.enqueue(50);
myQueue.enqueue(60);
myQueue.enqueue(70);

myQueue.display();

myQueue.size();

myQueue.peek();

myQueue.getValue();




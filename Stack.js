class Stack{
    constructor(){
        this.top = 0;
        this.item = {};
    }

    push(element){
        /* Add element into the Stack */
        this.item[this.top] = element;
        this.top++;
        console.log("Inserted item is:" + element);
    }

    pop(){
        /* Remove element from the Stack */
        const result = this.item[this.top - 1];
        delete this.item[this.top - 1];
        this.top--;
        console.log("Removed item is:" + result);
    }

    display(){
        /* Display all the elements in the Stack */
        if(this.size() === 0){
            console.log("Stack is Empty!");
        }
        console.log("Stack elements are:");
        for(let i = this.top - 1; i >= 0; i--){
            console.log(this.item[i]);
        }
    }

    getTop(){
        /* Get the value of the top */
        return this.top;
    }

    size(){
        /* Get the size of the Stack */
        const length = this.top;
        return length;
    }

    isEmpty(){
        /* Check if the Stack is empty */
        length ? console.log("Stack is not empty!") : console.log("Stack is empty!");
    }

    peek(){
        /* Get the top element of the Stack */
        return this.item[this.top - 1];
    }

}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);

myStack.pop();

const stacklength = myStack.size();
console.log("Size of the stack is:" + stacklength);

const topelement = myStack.peek();
console.log("Peek element is:" + topelement);

const stacktop = myStack.getTop();
console.log("Top of the stack is:" + stacktop);

myStack.display();

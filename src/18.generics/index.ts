class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

numberStack.pop();

// console.log(numberStack);

const stringStack = new Stack<String>();

stringStack.push("Hello");
stringStack.push("world");
stringStack.push("Java");

stringStack.pop();

// console.log(stringStack);
